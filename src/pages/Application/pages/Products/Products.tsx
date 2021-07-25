import React, { useState } from "react";
import { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { ProductList, EmptyProductList, NewProductForm } from "./pages";
import { Container, Header } from "./styles";

export const Products:React.FC = () => {
    const history = useHistory()
    let { path, url } = useRouteMatch();
    const [products, setProducts] = useState<string | null>(localStorage.getItem('products'))

    useEffect(() => {
        if(!products) {
            history.push('/products/empty')
        }
        setProducts(localStorage.getItem('products'))
    }, [])

    return (
        <Container>
            <Header>
                Produtos
            </Header>
            <Switch>
                <Route exact path={`${path}`}>
                    <ProductList/>
                </Route>
                <Route path={`${path}/empty`}>
                    <EmptyProductList/>
                </Route>
                <Route path={`${path}/new`}>
                    <NewProductForm/>
                </Route>
                <Route path={`${path}/edit/:id`}>
                    <NewProductForm/>
                </Route>
            </Switch>
        </Container>
    )
}