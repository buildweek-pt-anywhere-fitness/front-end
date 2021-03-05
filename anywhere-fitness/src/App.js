import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import Home from './Components/Home.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/'><button>Home</button></Link>
      <Link to='/signup'><button>Register</button></Link>
      <Route exact path='/'><Home /></Route>
      <Route path='/signup'><Signup /></Route>
    </div>
  );
}

export default App;
