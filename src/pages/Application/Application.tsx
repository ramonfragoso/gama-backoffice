import React from "react";
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { Layout } from "../../components";
import { Clients, Products } from "./pages";

export const Application:React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/clients' exact>
                        <Clients/>
                    </Route>
                    <Route path='/products' exact>
                        <Products/>
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}