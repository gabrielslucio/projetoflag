import React from 'react';

import NavTop from './components/NavTop/NavTop';
import NavBot from './components/NavBot/NavBot';
import Livros from './container/Livros/Livros';
import Servicos from './container/Servicos/Servicos';
import Eventos from './container/Eventos/Eventos';
import Contatos from './container/Contatos/Contatos';

import './App.scss';
import '../src/styles/Body.scss';



function App() {
  return (
    <div className="App">
      <NavTop />   
      <NavBot /> 
      <Livros />
      <Servicos />
      <Eventos />
      <Contatos />
    </div>
  );
}

export default App;
