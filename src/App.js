import React from 'react';

import NavTop from './components/NavTop/NavTop';
import NavBot from './components/NavBot/NavBot';

import Data from './Data.json';

import './App.scss';
import '../src/styles/Body.scss';



function App() {
  return (
    <div className="App">
      <NavTop />   
      <NavBot /> 
    </div>
  );
}

export default App;
