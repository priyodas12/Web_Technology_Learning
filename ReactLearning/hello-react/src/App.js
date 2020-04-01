import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Demo } from './Components/Props.jsx'

function App() {
  return (
    <div className="App">
        <Demo city='Bangalore' temp='21' />
        <Demo city='Kolkata' temp='24' />
        <Demo city='Delhi' temp='29' />
    </div>
  );
}

export default App;
