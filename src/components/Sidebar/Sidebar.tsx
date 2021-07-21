import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Header } from "./styles";

export const Sidebar:React.FC = () => {

    const history = useHistory()

    const redirectTo = (route:string) => {
        history.push(route)
    }

    return (
        <Container>
            <Header>GAMA STORE</Header>
            <Button onClick={() => redirectTo('/clients')}> 
                Clientes
            </Button>
            <Button onClick={() => redirectTo('/products')}> 
                Produtos
            </Button>
        </Container>
    )
}