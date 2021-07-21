import styled from 'styled-components'

export const Container = styled.div`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    border-right: 2px solid lightgray;
`

export const Header = styled.div`
    text-align: center;
    padding: 30px 0px;
    border-bottom: 1px solid lightgray;
`

export const Button = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 20px 100px;
    transition: ease-in-out .2s;
    :hover {
        background-color: lightgray;
    }
`