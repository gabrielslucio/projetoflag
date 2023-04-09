import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './CriarConta.css';

const CriarConta = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "", 
    });

    const [accountCreated, setAccountCreated] = useState(false);
    const [accountAlert, setAccountAlert] = useState(false);

    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { username, password } = formData;

        const accountID = Math.random().toString(36).substring(2, 9);

        const newAccount = { id: accountID, username, password};

        const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

        const updatedAccounts = [...existingAccounts, newAccount];

        localStorage.setItem("accounts", JSON.stringify(updatedAccounts));

        setAccountCreated(true);
        setAccountAlert(true);

        setTimeout(() => {
            window.location.href="/minhaconta";
        }, 2000);
        
    }

    return (
       <section className="app__c-account">
        <div className="app__c-acc-container">
            
            <form className="app__acc-f" onSubmit={handleSubmit}>
            {accountAlert && (
                <div className="app__falert">
                    <p>Conta criada com sucesso!</p>
                </div>
            )}
                <h1>Criar uma nova conta:</h1>
                <label htmlFor="username">
                    Utilizador:
                    <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}   
                        required                 
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password} 
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Criar conta</button>
                {accountCreated && (
                    <NavLink to="/minhaconta"> Fazer Login </NavLink>
                )}             
            </form>
        </div>
       </section>
    );

}

export default CriarConta;