import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/home'

import Header from './pages/components/Header'

const Routes =() =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        
        </BrowserRouter>
    )
}



export default Routes;






// switch um componente por rotas
