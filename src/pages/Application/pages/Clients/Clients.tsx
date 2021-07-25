import React, { useState } from "react";
import { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { ClientsList } from "./pages";
import { EmptyClientList } from "./pages/EmptyClientList";
import { NewClientForm } from "./pages/NewClientForm";
import { Container, Header } from "./styles";

export const Clients:React.FC = () => {
    const history = useHistory()
    let { path, url } = useRouteMatch();
    const [clients, setClients] = useState<string | null>(JSON.parse(localStorage.getItem('clients') || ''))

    useEffect(() => {
        if(!clients || clients.length===0) {
            history.push('/clients/empty')
        }
        setClients(localStorage.getItem('clients'))
    }, [])

    return (
        <Container>
            <Header>
                Clientes
            </Header>
            <Switch>
                <Route exact path={`${path}`}>
                    <ClientsList/>
                </Route>
                <Route path={`${path}/empty`}>
                    <EmptyClientList/>
                </Route>
                <Route path={`${path}/new`}>
                    <NewClientForm/>
                </Route>
                <Route path={`${path}/edit/:id`}>
                    <NewClientForm/>
                </Route>
            </Switch>
        </Container>
    )
}