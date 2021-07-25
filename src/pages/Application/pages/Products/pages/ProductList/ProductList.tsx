import React, { useEffect, useState } from "react";
import { Button } from "../../../../../../components";
import { Product } from "../../../../../../types";
import { Container, Header, Row, Title, Data, ButtonData } from "./styles";
import { FiEdit3, FiXCircle } from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

export const ProductList:React.FC = () => {

    const history = useHistory()
    const [products, setProducts] = useState<Product[]>([])
    const [reRenderList, setRerenderList] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('products')) {
            setProducts(JSON.parse(localStorage.getItem('products') || ''))
        } else {
            history.push('/products/empty')
        }
    }, [reRenderList])

    const handleDelete = (model: string) => {
        const products:Product[] = JSON.parse(localStorage.getItem('products') || '')
        const productIndex = products.findIndex(product => product.model === model)
        products.splice(productIndex,1)
        localStorage.setItem('products', JSON.stringify(products))
        toast.success('Produto removido com sucesso!')
        setRerenderList(!reRenderList)
        return
    }

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
                        <Header>Deletar</Header>
                    </Row>
                        {products.map(product => (
                            <Row>
                                <Data>{product.name}</Data>
                                <Data>{product.brand}</Data>
                                <Data>{product.model}</Data>
                                <Data>{product.price}</Data>
                                <Data>{product.discount}</Data>
                                <ButtonData onClick={() => history.push(`/products/edit/${product.model}`)}><FiEdit3/></ButtonData>                                
                                <ButtonData onClick={() => handleDelete(product.model)}><FiXCircle/></ButtonData>
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