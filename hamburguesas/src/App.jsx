import React from 'react';
import NavBar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Burger Rulo!" />
    </div>
  );
};

export default App;
