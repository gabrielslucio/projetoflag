import React from 'react';

import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";


import NavTop from './components/NavTop/NavTop';
import NavBot from './components/NavBot/NavBot';
import Header from './components/Header/Header';
import Livros from './container/Livros/Livros';
import Servicos from './container/Servicos/Servicos';
import Eventos from './container/Eventos/Eventos';
import Contatos from './container/Contatos/Contatos';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBot from './components/FooterBot/FooterBot';

import LLivros from './container/Lista Livros/LLivros';
import RLivros from './container/Reservar Livros/RLivros';



import './App.scss';
import '../src/styles/Body.scss';
import ScrollToTop from './Router/ScrollToTop/ScrollToTop';

function Home() {
  return (
    <>    
    <Header />
    <Livros />
    <Servicos />
    <Eventos />
    <Contatos />    
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <NavTop />
      <NavBot />  
      <ScrollToTop>   
          <Routes>
            <Route index path="/" element={ <Home /> } />
            <Route path="/rlivros" element= { <RLivros /> } />
            <Route path="/llivros" element={ <LLivros /> } />
          </Routes>   
        </ScrollToTop>         
      <FooterTop />
      <FooterBot />


        
      { /* 
        <Routes>
          
          <Route index path="/" element={ <Header /> } />
          <Route path="/livros" element={ <Livros /> } />
          <Route path="/servicos" element={ <Servicos /> } />
          <Route path="/eventos" element={ <Eventos /> } />
          <Route path="/contatos" element={ <Contatos /> } />
          <Route path="/reserva-livros" element={ <RLivros /> } />
          
          
        </Routes>

    */}
    
    </div>
    </BrowserRouter>
  );
}

export default App;
