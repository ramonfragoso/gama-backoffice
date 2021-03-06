import React, { useState } from "react";
import { Button } from "../../../../../../components";
import { Client } from "../../../../../../types";
import { Container, Header, Row, Title, Data, ButtonData } from "./styles";
import { FiEdit3, FiXCircle } from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-toastify';

export const ClientsList:React.FC = () => {

    const history = useHistory()
    const [clients, setClients] = useState<Client[]>([])
    const [reRenderList, setRerenderList] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('clients')) {
            setClients(JSON.parse(localStorage.getItem('clients') || ''))
        } else {
            history.push('/clients/empty')
        }
    }, [reRenderList])

    const handleDelete = (cpf: string) => {
        const clients:Client[] = JSON.parse(localStorage.getItem('clients') || '')
        const clientIndex = clients.findIndex(client => client.cpf === cpf)
        clients.splice(clientIndex,1)
        localStorage.setItem('clients', JSON.stringify(clients))
        toast.success('Cliente removido com sucesso!')
        setRerenderList(!reRenderList)
        return
    }

    return (
        <Container>
            <div>
                <Title>Clientes Cadastrados</Title>
                <table>
                    <Row>
                        <Header>Nome</Header>
                        <Header>CPF</Header>
                        <Header>E-mail</Header>
                        <Header>Cidade</Header>
                        <Header>Estado</Header>
                        <Header>Rua</Header>
                        <Header>Bairro</Header>
                        <Header>Número</Header>
                        <Header>Editar</Header>
                        <Header>Deletar</Header>
                    </Row>
                        {clients.map(client => (
                            <Row>
                                <Data>{client.name}</Data>
                                <Data>{client.cpf}</Data>
                                <Data>{client.email}</Data>
                                <Data>{client.city}</Data>
                                <Data>{client.state}</Data>
                                <Data>{client.street}</Data>
                                <Data>{client.neighborhood}</Data>
                                <Data>{client.number}</Data>
                                <ButtonData onClick={() => history.push(`/clients/edit/${client.cpf}`)}><FiEdit3/></ButtonData>                                
                                <ButtonData onClick={() => handleDelete(client.cpf)}><FiXCircle/></ButtonData>
                            </Row>
                        ))}
                </table>
            </div>
            <div>
                <Button onClick={() => history.push('/clients/new')}>Novo cliente</Button>
            </div>

        </Container>
    )
}