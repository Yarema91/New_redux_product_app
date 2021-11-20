// import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./features/HomePage";
import CardPage from "./features/CardPage";
import Header from "./features/Header";
import Footer from "./features/project/Footer";
// import { useAppSelector } from "./hooks/redux";


const App = () => {
    // const {} = useAppSelector(state => state.productReducer.products);

    return (
       <BrowserRouter>
        <Header />
            <Switch>
                <Route exact
                    path="/" component={HomePage}
                />
                <Route path="/card/:id"
                    component={CardPage}
                />
            </Switch>
            <Footer />

        </BrowserRouter>
    )
}

export default App
