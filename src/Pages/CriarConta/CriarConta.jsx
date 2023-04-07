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
        const accountData = { username, password };
        localStorage.setItem('accountData', JSON.stringify(accountData));
        setAccountCreated(true);
        setAccountAlert(true);
        
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