import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddToCart from './Components/AddToCart'
import Greet from './Components/Greet'
import GreetClass from './Components/GreetClass'

function App() {
  return (
    <div className="App">
        <AddToCart/>
        <Greet name="priyo" surname="das"/>
        <GreetClass name="priyo" surname="das"/>
    </div>
  );
}

export default App;
