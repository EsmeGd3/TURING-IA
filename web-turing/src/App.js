import React from 'react';
import Header from './componentes/Header';
import Main from './componentes/Main'; // Ruta correcta a Header
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      
    </div>
  );
}

export default App;