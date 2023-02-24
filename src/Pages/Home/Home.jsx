import React from "react";

import NavBot from '../../components/NavBot/NavBot';
import Header from '../../components/Header/Header';
import Livros from '../../container/Livros/Livros';
import Servicos from '../../container/Servicos/Servicos';
import Eventos from '../../container/Eventos/Eventos';
import Contatos from '../../container/Contatos/Contatos';

function Home() {
    return (
      <>    
      <NavBot /> 
      <Header />
      <Livros />
      <Servicos />
      <Eventos />
      <Contatos />    
      </>
    );
  }

export default Home;