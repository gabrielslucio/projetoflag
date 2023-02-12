import React from 'react';

import NavTop from './components/Navbar/NavTop';
import NavBot from './components/NavBot';

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
