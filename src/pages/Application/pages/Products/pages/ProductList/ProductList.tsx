import React, { useEffect, useState } from "react";
import { Button } from "../../../../../../components";
import { Product } from "../../../../../../types";
import { Container, Header, Row, Title, Data, ButtonData } from "./styles";
import { FiEdit3 } from 'react-icons/fi';
import { useHistory } from "react-router-dom";

export const ProductList:React.FC = () => {

    const history = useHistory()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        if(localStorage.getItem('products')) {
            setProducts(JSON.parse(localStorage.getItem('products') || ''))
        } else {
            history.push('/products/empty')
        }
    }, [])

    return (
        <Container>
            <div>
                <Title>Produtos Cadastrados</Title>
                <table>
                    <Row>
                        <Header>Nome</Header>
                        <Header>Marca</Header>
                        <Header>Modelo</Header>
                        <Header>Preço</Header>
                        <Header>Desconto</Header>
                        <Header>Editar</Header>
                    </Row>
                        {products.map(product => (
                            <Row>
                                <Data>{product.name}</Data>
                                <Data>{product.brand}</Data>
                                <Data>{product.model}</Data>
                                <Data>{product.price}</Data>
                                <Data>{product.discount}</Data>
                                <ButtonData onClick={() => history.push(`/products/edit/${product.name}`)}><FiEdit3/></ButtonData>                                
                                {/* <ButtonData onClick={() => history.push('/clients/edit')}><FiXCircle/></ButtonData> */}
                            </Row>
                        ))}
                </table>
            </div>
            <div>
                <Button onClick={() => history.push('/products/new')}>Novo produto</Button>
            </div>

        </Container>
    )
}