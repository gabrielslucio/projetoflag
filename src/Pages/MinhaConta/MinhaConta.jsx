import React from "react";
import { NavLink } from "react-router-dom";

import './MinhaConta.css'

const MinhaConta = () => {

    return (
        <section className="app__myacc">
            <div className="app__myacc-container">
                <div className="app__login-form">
                    <form className="app__l-content">
                        <label htmlFor="utilizador">
                            Utilizador:
                            <input 
                                id="utilizador" 
                                name="utilizador"
                                type="text" 
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
                                required
                            >                            
                            </input>
                        </label>
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