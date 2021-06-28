
import { useEffect, useState } from 'react';
import './filme-info.css';

import api from '../../services/api';
import './filme-info.css';

import { useParams, useHistory } from 'react-router';


export default function Filme(){

    const {id} = useParams();
    const history= useHistory();



    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);//quando entrar na pg já estiver carregando


    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            //console.log(response.data)

            if(response.data.length === 0){
                //Tentou acessar com um ID que não existe, navega para Home
                history.replace('/');
                return;
            }

            setFilme(response.data);

            setLoading(false);
        }

        loadFilme();

        return () =>{
            console.log('Componente Desmontado')
        }


    }, [history, id]);


    if(loading){
        return(
            <div className="filme-info">
                <h1>carregando seu filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>Sinopse</h3>
            {filme.sinopse}


            <div className="botoes">
                <button onClick={()=>{}}>Salvar</button>

                <button>
                    <a target="black" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>
                </button>

            </div>
        </div>
    )
}