import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Demo } from './Components/Props.jsx'
import Welcome from './Components/GreetClass.jsx'

function App() {
  return (
    <div className="App">
        <Demo city='Bangalore' temp='21'>
            <p>560103</p>
            <button>Action</button>
        </Demo>
        <Demo city='Kolkata' temp='24'>
            <p>700120</p>
        </Demo>
        <Demo city='Delhi' temp='29'>
            <p>454556</p>
        </Demo>
        <Welcome name='xyz'>
            <p>01/04/2020</p>
        </Welcome>
    </div>
  );
}

export default App;
