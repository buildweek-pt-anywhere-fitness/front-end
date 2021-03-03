import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      App is online.
      <Signup />
    </div>
  );
}

export default App;
