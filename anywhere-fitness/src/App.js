import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;