import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Message, PlusIcon, Span } from "./styles";

export const EmptyClientList:React.FC = () => {
    const history = useHistory()
    const redirect = () => {
        history.push('/clients/new')
    }

    return (
        <Container>
            <Message>Você ainda não possui nenhum cliente cadastrado.</Message>
            <Button onClick={redirect}>
                <Span>
                    <div>Cadastrar cliente</div>
                    <PlusIcon/> 
                </Span>
            </Button>
        </Container>    
    )
}