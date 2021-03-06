import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/home'
import Filme from './pages/filme';
import Favoritos from "./pages/favoritos";
import Erro from './pages/erro'

import Header from './pages/components/Header'

const Routes =() =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos}/>
                <Route path="*" component={Erro}/>
            </Switch>
        
        </BrowserRouter>
    )
}



export default Routes;






// switch um componente por rotas
