
import { useEffect, useState } from 'react';
import './filme-info.css';

import api from '../../services/api'

import { useParams } from 'react-router';


export default function Filme(){

    const {id} = useParams();
    const [filmes, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);//quando entrar na pg já estiver carregando


    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            //console.log(response.data)

            setFilme(response.data);

            setLoading(false);
        }

        loadFilme();
    }, [id]);


    if(loading){
        return(
            <div className="filme-info">
                <h1>carregando seu filme...</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>PAGINA DETALHES {id}</h1>
        </div>
    )
}