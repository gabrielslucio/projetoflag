import React from "react";

import { NavLink } from "react-router-dom";

import '../NavBot/NavBot.scss';


const NavBot = () => {

    return (
        <nav>
            <div className="app__navbot">
                <ul className="app__navbot-links">
                    <li className="app__navbot-livros"><NavLink to="/livros">Livros</NavLink></li>
                    <li className="app__navbot-servicos"><NavLink to="/servicos">Serviços</NavLink></li>
                    <li className="app__navbot-eventos"><NavLink to="/eventos">Eventos</NavLink></li>
                    <li className="app__navbot-contatos"><NavLink to="/contatos">Contatos</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBot;