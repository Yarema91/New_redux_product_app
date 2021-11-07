// import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./features/counter/Page";
import CardPage from "./features/counter/CardPage";

const App = () => {


    return (
        <BrowserRouter>
        <Switch>
            <Route  exact
            path ="/" component={Page}
             />
             <Route path="/card/:id" 
            component={ CardPage }
            />
        </Switch>
        </BrowserRouter>
    )
}

export default App
