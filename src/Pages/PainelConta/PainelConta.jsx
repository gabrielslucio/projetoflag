import React from "react";

import './PainelConta.css';

const PainelConta = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if(isLoggedIn === "true") {
        return (
            <h1>ISTO É UM TESTE</h1>
        );
    } else {
        return (
            <h1>NÃO EXISTE AQUI NADA</h1>
        );
    }
}

export default PainelConta;