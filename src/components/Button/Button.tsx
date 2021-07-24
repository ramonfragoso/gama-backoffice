import React from "react";
import { StyledButton } from "./styles";

export type ButtonProps = {
    type?: "button" | "submit" | "reset",
    onClick?: () => void,
}

export const Button: React.FC<ButtonProps> = props => {
    const { children, type, onClick } = props

    return (
        <StyledButton onClick={onClick} type={type}>
            {children}
        </StyledButton>
    )
}