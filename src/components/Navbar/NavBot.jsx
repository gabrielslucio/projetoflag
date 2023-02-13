import React from "react";

import '../Navbar/NavBot.scss';

const NavBot = () => {

    return (
        <div className="app__navbot">
            <ul className="app__navbot-links">
                <li className="app__navbot-livros active"><a href='#livros'>Livros</a></li>
                <li className="app__navbot-servicos"><a href='#servicos'>Serviços</a></li>
                <li className="app__navbot-eventos"><a href='#eventos'>Eventos</a></li>
                <li className="app__navbot-contatos"><a href='#contatos'>Contatos</a></li>
            </ul>
        </div>
    );



}

export default NavBot;