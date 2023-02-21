import React from 'react';

import NavTop from './components/NavTop/NavTop';
import NavBot from './components/NavBot/NavBot';
import Livros from './container/Livros/Livros';
import Servicos from './container/Servicos/Servicos';
import Eventos from './container/Eventos/Eventos';
import Contatos from './container/Contatos/Contatos';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBot from './components/FooterBot/FooterBot';

import './App.scss';
import '../src/styles/Body.scss';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      
        <NavTop />   
        <NavBot /> 

       
          <Header />
        
        
        
          <Livros />
      
        
        
          <Servicos />
        

       
          <Eventos />
      

        
          <Contatos />
        
        <FooterTop />
        <FooterBot />
      




    </div>
  );
}

export default App;
