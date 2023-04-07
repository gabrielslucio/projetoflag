import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './CriarConta.css';

const CriarConta = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "", 
    });

    const [accountCreated, setAccountCreated] = useState(false);

    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = formData;
        const accountData = { username, password };
        localStorage.setItem('accountData', JSON.stringify(accountData));
        alert("Conta criada com sucesso!");
        setAccountCreated(true);
        
    }

    return (
       <section className="app__c-account">
        <div className="app__c-acc-container">
            <form onSubmit={handleSubmit}>
                <h1>Criar uma nova conta</h1>
                <label htmlFor="username">
                    Utilizador:
                    <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}                    
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password} 
                        onChange={handleInputChange}
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