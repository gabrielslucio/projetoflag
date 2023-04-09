import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavTop from './components/NavTop/NavTop';
import Home from './Pages/Home/Home';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBot from './components/FooterBot/FooterBot';

import LLivros from './Pages/ListaLivros/LLivros';
import RLivros from './Pages/ReservarLivros/RLivros';
import MinhaConta from './Pages/MinhaConta/MinhaConta';
import CriarConta from './Pages/CriarConta/CriarConta';
import PainelConta from './Pages/PainelConta/PainelConta';

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
            <Route path="/minhaconta" element={ <MinhaConta /> } />
            <Route path="/criarconta" element={ <CriarConta /> } />
            <Route exact path="/painelconta/:id" element={ <PainelConta /> } />
          </Routes>   
        </ScrollToTop>         
      <FooterTop />
      <FooterBot />
    </div>
    </BrowserRouter>
  );
}

export default App;
