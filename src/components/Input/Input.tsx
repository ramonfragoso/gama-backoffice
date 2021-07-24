import React from "react";
import { Container, Label, StyledInput } from "./styles";


export type InputProps = {
    label: string,
    placeholder?: string ,
    type?: string,
    maxLength?: number,
    maxWidth?: string,
    onChange: (name: string, value: string) => void,
    name: string
}

export const Input: React.FC<InputProps> = props => {

    const { name, label, placeholder, type, maxLength, maxWidth, onChange } = props

    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        onChange(name, e.currentTarget.value)
    }

    return (
        <Container>
            <Label>{label}</Label>
            <StyledInput onChange={handleChange} type={type} placeholder={placeholder} maxLength={maxLength} maxWidth={maxWidth}/>
        </Container>
    )
}