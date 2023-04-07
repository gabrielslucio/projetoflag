import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './MinhaConta.css'

const MinhaConta = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const accountData = JSON.parse(localStorage.getItem("accountData"));
        if (accountData && accountData.username === username && accountData.password === password) {
            setSuccessMessage(true);
            setErrorMessage(false);

            localStorage.setItem("isLoggedIn", true);

            setTimeout(() => {
                window.location.href = "/";
            }, 2000);

        } else {
            setErrorMessage(true);
            setSuccessMessage(false);
        }
    }    

    return (
        <section className="app__myacc">
            <div className="app__myacc-container">
                <div className="app__login-form">
                    <form className="app__l-content" onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Utilizador:
                            <input 
                                id="username" 
                                name="username"
                                type="text"
                                value={username}
                                onChange={handleInputChange} 
                                required
                            >
                            </input>
                        </label>
                        <label htmlFor="password">
                            Password:
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handleInputChange}
                                required
                            >                            
                            </input>
                        </label>
                        {successMessage && (
                            <div className="app__s-m">
                                <p>Login sucedido!</p>
                            </div>
                        )}
                        {errorMessage && (
                            <div className="app__e-m">
                                <p>Campos incorrectos, tente de novo!</p>
                            </div>
                        )}
                        <div className="app__l-btns">
                            <button>Entrar</button>
                        </div>  
                        <div className="app__c-acc">
                            <NavLink to="/criarconta">Criar Conta
                            </NavLink>
                        </div>                       
                    </form>               
                </div>
            </div>
        </section>
    );
}

export default MinhaConta;