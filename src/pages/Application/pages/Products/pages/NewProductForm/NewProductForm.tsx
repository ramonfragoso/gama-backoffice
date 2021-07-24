import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Input } from "../../../../../../components";
import { Field, Container, Title } from "./styles";
import { Product } from "../../../../../../types";
import { toast } from 'react-toastify';

const DEFAULT_PRODUCT:Product = {
    name: '',
    brand: '',
    price: '',
    discount: '',
    model: ''
}

export const NewProductForm:React.FC = () => {

    const [product, setProducts] = useState<Product>(DEFAULT_PRODUCT)
    const history = useHistory()

    const params = useParams<{id?: string}>()

    useEffect(() => {
        if(params.id) {
            setProducts(getProductById(params.id))
        }
    }, [])

    const getProductById = (id: string) => {
        const products:Product[] = JSON.parse(localStorage.getItem('products') || '')
        const foundProduct = products.find(product => product.name === id)
        return foundProduct || DEFAULT_PRODUCT
    }

    const changeProduct = (name: string, value: string) => {
        setProducts({...product, [name]: value})
    }   

    const validateProduct = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const values = Object.values(product)
        return values.filter(value => value==='').length > 0
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        if(validateProduct(e)) {
            toast.error('Por favor, preencha todos os campos.')
            return
        }
        const products = localStorage.getItem('products')
        if(products) {
            const newProducts = JSON.parse(products)
            localStorage.setItem('products', JSON.stringify([...newProducts, product]))
            history.push('/products')
            toast.success('Produto adicionado com sucesso.')
            return
        }
        localStorage.setItem('products', JSON.stringify([product]))
        toast.success('Produto adicionado com sucesso.')
        history.push('/products')
        return 
    }

    return (
        <Container>
            <Title>Cadastrar produto</Title>
            <form onSubmit={handleSubmit}>
                <Input onChange={changeProduct} name='name' value={product.name} label='Nome' placeholder='Ex.: Mouse Logitech.'/>
                <Input onChange={changeProduct} name='brand' value={product.brand} maxLength={11} label='Marca' placeholder='Ex.: Logitech'/>
                <Input onChange={changeProduct} name='model' value={product.model} label='Modelo' placeholder='Ex.: MX230V'/>
                <Field>
                    <Input onChange={changeProduct} name='price' value={product.price} label='Preço' maxWidth='30%'/>
                    <Input onChange={changeProduct} name='discount' value={product.discount} label='Desconto' placeholder='Ex.: 50%' maxLength={3} maxWidth='50%'/>
                </Field>
                <Button type='submit'>{params.id ? 'Atualizar' : 'Adicionar'}</Button>
            </form>
        </Container>
    )
}