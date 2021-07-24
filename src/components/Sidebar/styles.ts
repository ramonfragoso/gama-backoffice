import styled from 'styled-components'

export const Container = styled.div`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    border-right: 2px solid lightgray;
`

export const Header = styled.div`
    text-align: center;
    padding: 30px 30px;
    border-bottom: 1px solid lightgray;
`

export const Button = styled.div`
    text-align: center;
    border-bottom: 1px solid lightgray;
    padding: 20px 100px;
    transition: ease-in-out .2s;
    :hover {
        background-color: lightgray;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 75%;
`

export const Buttons = styled.div`
`

export const Version = styled.div`
    text-align: center;
    padding-bottom: 10px;
`
