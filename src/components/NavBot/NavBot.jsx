import React from "react";

import "../NavBot/NavBot.scss";

const NavBot = () => {
  return (
    <nav>
      <div className="app__navbot">
        <ul className="app__navbot-links">
          <li className="app__navbot-livros">
            <a href="#app-livros">Livros</a>
          </li>
          <li className="app__navbot-servicos">
            <a href="#app-servicos">Serviços</a>
          </li>
          <li className="app__navbot-eventos">
            <a href="#app-eventos">Eventos</a>
          </li>
          <li className="app__navbot-contatos">
            <a href="#app-contatos">Contatos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBot;
