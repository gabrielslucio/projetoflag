import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavTop from './components/NavTop/NavTop';
import Home from './Pages/Home/Home';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBot from './components/FooterBot/FooterBot';

import LLivros from './Pages/ListaLivros/LLivros';
import RLivros from './Pages/ReservarLivros/RLivros';

import './App.scss';
import '../src/styles/Body.scss';
import ScrollToTop from './Router/ScrollToTop/ScrollToTop';




function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <NavTop />
      <ScrollToTop>   
          <Routes>
            <Route index path="/" element={ <Home /> } />
            <Route path="/llivros" element={ <LLivros /> } />
            <Route exact path="/livro/:id" element= { <RLivros/> } />
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
