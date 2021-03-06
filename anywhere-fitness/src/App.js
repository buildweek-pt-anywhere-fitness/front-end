import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Instructor from './components/Instructor';
import CreateClass from './components/CreateClass';
import UpdateClass from './components/UpdateClass';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      App is online.
      <Router>
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/instructorclasses' component={Instructor} />
        <PrivateRoute path='/instructorclasses/:id' component={UpdateClass} />
        <PrivateRoute path='/newclass' component={CreateClass} />
      </Router>
    </div>
  );
}

export default App;