import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import Status from './Components/Status.js';
import Home from './Components/Home.js';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api-anywhere-fitness.herokuapp.com')
    .then(response => {
      console.log('Response', response);
    })
    .catch(error => {
      console.log('see error', error);
    })
  }, [])

  return (
    <div className="App">
      <Link to='/'><button>Home</button></Link>
      <Link to='/signup'><button>Register</button></Link>
      <Link to='/status'><button>Status</button></Link>
      <Route exact path='/'><Home /></Route>
      <Route path='/signup'><Signup users={users} setUsers={setUsers} /></Route>
      <Route path='/status'><Status users={users} /></Route>
    </div>
  );
}

export default App;
