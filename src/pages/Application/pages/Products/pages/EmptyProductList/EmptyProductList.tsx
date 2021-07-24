import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Message, PlusIcon, Span } from "./styles";

export const EmptyProductList:React.FC = () => {
    const history = useHistory()
    const redirect = () => {
        history.push('/products/new')
    }

    return (
        <Container>
            <Message>Você ainda não possui nenhum produto cadastrado.</Message>
            <Button onClick={redirect}>
                <Span>
                    <div>Cadastrar produto</div>
                    <PlusIcon/> 
                </Span>
            </Button>
        </Container>    
    )
}