import React from "react";
import { Sidebar } from "../Sidebar";
import { Container } from "./styles";

export const Layout:React.FC = ({ children }) => {
    return (
        <Container>
            <Sidebar/>
            {children}
        </Container>
    )
}