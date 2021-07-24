import styled from 'styled-components'

export const Container = styled.div`
    margin: 30px 30px 30px 0px;
`

export const Label = styled.div`
    margin-bottom: 10px;
`

interface InputProps {
    maxWidth?: string
}

export const StyledInput = styled.input<InputProps>`
    border-radius: 12px;
    outline: none;
    padding: 10px;
    width: ${props => props.maxWidth || 'auto'}
`