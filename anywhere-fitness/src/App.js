import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Register from './Components/Register.js';
import Status from './Components/Status.js';
import Home from './Components/Home.js';
import axios from 'axios';
import logo from './logo.svg';
import Login from './components/Login';
import Signup from './components/Signup.js';
import Instructor from './components/Instructor';
import CreateClass from './components/CreateClass';
import UpdateClass from './components/UpdateClass';
import './App.css';
import PrivateRoute from "./Components/PrivateRoute";

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
      <Link to='/register'><button>Register</button></Link>
      <Link to='/status'><button>Status</button></Link>
      <Route exact path='/'><Home /></Route>
      <Route path='/register'><Register users={users} setUsers={setUsers} /></Route>
      <Route path='/status'><Status users={users} /></Route>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <PrivateRoute exact path='/instructorclasses' component={Instructor} />
      <PrivateRoute path='/instructorclasses/:id' component={UpdateClass} />
      <PrivateRoute path='/newclass' component={CreateClass} />
    </div>
  );
}

export default App;