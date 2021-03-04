import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import Instructor from './Components/Instructor';
import CreateClass from './Components/CreateClass';
import UpdateClass from './Components/UpdateClass';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      App is online.
      <Signup />
      <Router>
        <Route exact path='/instructorclasses' component={Instructor} />
        <Route path='/instructorclasses/:id' component={UpdateClass} />
        <Route path='/newclass' component={CreateClass} />
      </Router>
    </div>
  );
}

export default App;