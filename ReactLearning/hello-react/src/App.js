import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/GreetClass'

function App() {
  return (
    <div className="App">
        <Greet />
        <Welcome />
    </div>
  );
}

export default App;
