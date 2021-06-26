import './header.css';

//para usar links
import {Link} from 'react-router-dom';



export default function Header(){
    return(
        <header>
         <Link className="logo" to="/">Filmaria</Link>
         <Link className="favoritos" to="/">Salvos</Link>
        </header>
    )
}