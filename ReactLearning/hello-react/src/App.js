import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddToCart from './Components/AddToCart'
import Greet from './Components/Greet'

function App() {
  return (
    <div className="App">
        <AddToCart/>
        <Greet name="" surname="das"/>
    </div>
  );
}

export default App;
