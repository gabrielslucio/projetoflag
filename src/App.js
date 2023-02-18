import React from 'react';

import NavTop from './components/NavTop/NavTop';
import NavBot from './components/NavBot/NavBot';
import Livros from './container/Livros/Livros';
import Servicos from './container/Servicos/Servicos';

import './App.scss';
import '../src/styles/Body.scss';



function App() {
  return (
    <div className="App">
      <NavTop />   
      <NavBot /> 
      <Livros />
      <Servicos />
    </div>
  );
}

export default App;
