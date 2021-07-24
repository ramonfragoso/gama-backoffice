import styled from 'styled-components'
import { AiOutlineUserAdd } from 'react-icons/ai';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80%;
    width: 100%;
`

export const Message = styled.h2`
    font-weight: normal;
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    background: hsl(340deg 100% 32%);
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: ease-in-out .1s;
    :active {
        transform: translateY(-2px);
    }
`
export const Span = styled.span`
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    background: hsl(345deg 100% 47%);
    color: white;
    transform: translateY(-6px);
`

export const PlusIcon = styled(AiOutlineUserAdd)`
    margin-top: 10px;
    font-size: 40px;
`
