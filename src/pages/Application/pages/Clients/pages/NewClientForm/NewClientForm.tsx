import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Input } from "../../../../../../components";
import { Client } from "../../../../../../types/Client";
import { AddressField, Container, Title } from "./styles";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
const DEFAULT_CLIENT:Client = {
    cpf: '',
    name: '',
    email: '',
    city: '',
    neighborhood: '',
    number: 0,
    state: '',
    street: ''
}

export const NewClientForm:React.FC = () => {

    const [client, setClient] = useState<Client>(DEFAULT_CLIENT)
    const history = useHistory()

    const params = useParams<{id?: string}>()

    useEffect(() => {
        if(params.id) {
            setClient(getClientById(params.id))
        }
    }, [])

    const updateClientById = (id: string, newClient: Client) => {
        const clients:Client[] = JSON.parse(localStorage.getItem('clients') || '')
        const clientIndex = clients.findIndex(client => client.cpf === id)
        clients.splice(clientIndex,1, newClient)
        localStorage.setItem('clients', JSON.stringify(clients))
        history.push('/clients')
        toast.success('Cliente atualizado com sucesso!')
        return
    }

    const getClientById = (id: string) => {
        const clients:Client[] = JSON.parse(localStorage.getItem('clients') || '')
        const foundClient = clients.find(client => client.cpf === id)
        return foundClient || DEFAULT_CLIENT
    }

    const changeClient = (name: string, value: string) => {
        console.log(client)
        setClient({...client, [name]: value})
    }   

    const validateClient = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const values = Object.values(client)
        return values.filter(value => value==='').length > 0
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        if(validateClient(e)) {
            toast.error('Por favor, preencha todos os campos.')
            return
        }
        if(params.id) {
            updateClientById(params.id, client)
            return
        }
        const clients = localStorage.getItem('clients')
        if(clients) {
            const newClients = JSON.parse(clients)
            localStorage.setItem('clients', JSON.stringify([...newClients, client]))
            history.push('/clients')
            toast.success('Cliente adicionado com sucesso.')
            return
        }
        localStorage.setItem('clients', JSON.stringify([client]))
        toast.success('Cliente adicionado com sucesso.')
        history.push('/clients')
        return 
    }

    return (
        <Container>
            <Title>Cadastrar cliente</Title>
            <form onSubmit={handleSubmit}>
                <Input onChange={changeClient} name='name' value={client.name} label='Nome' placeholder='Digite o nome do cliente'/>
                <Input onChange={changeClient} name='cpf' value={client.cpf} maxLength={11} label='CPF' placeholder='Digite o CPF do cliente'/>
                <Input onChange={changeClient} name='email' value={client.email} label='E-mail' placeholder='Digite o e-mail do cliente'/>
                <AddressField>
                    <Input onChange={changeClient} name='city' value={client.city} label='Cidade' placeholder=''/>
                    <Input onChange={changeClient} name='state' value={client.state} label='Estado' placeholder='XX' maxLength={2} maxWidth='20%'/>
                </AddressField>
                <AddressField>
                    <Input onChange={changeClient} name='street' value={client.street} label='Rua' placeholder='Rua das Flores, 25...'/>
                    <Input onChange={changeClient} name='neighborhood' value={client.neighborhood} label='Bairro' placeholder='Bairro Fulano...'/>
                    <Input onChange={changeClient} name='number' value={client.number} label='Número' placeholder='XX' maxLength={2} maxWidth='20%'/>
                </AddressField>
                <Button type='submit'>{params.id ? 'Atualizar' : 'Adicionar'}</Button>
            </form>
        </Container>
    )
}