import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './components/Signup.js';
import Instructor from './components/Instructor';
import CreateClass from './components/CreateClass';
import UpdateClass from './components/UpdateClass';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      App is online.
      <Router>
        <Route exact path='/instructorclasses' component={Instructor} />
        <Route path='/instructorclasses/:id' component={UpdateClass} />
        <Route path='/newclass' component={CreateClass} />
      </Router>
    </div>
  );
}

export default App;