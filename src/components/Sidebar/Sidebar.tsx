import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Buttons, Container, Content, Header, Version } from "./styles";
import logo from '../../assets/logo.png'

export const Sidebar:React.FC = () => {

    const history = useHistory()

    const redirectTo = (route:string) => {
        history.push(route)
    }

    return (
        <Container>
            <Header>
                <img src={logo} width={250} alt='logo'/>
            </Header>
            <Content>
                <Buttons>
                    <Button onClick={() => redirectTo('/clients')}> 
                        Clientes
                    </Button>
                    <Button onClick={() => redirectTo('/products')}> 
                        Produtos
                    </Button>
                </Buttons>
                <Version>
                    v1.0.0
                </Version>
            </Content>
        </Container>
    )
}