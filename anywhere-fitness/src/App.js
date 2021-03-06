import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Instructor from './Components/Instructor';
import CreateClass from './Components/CreateClass';
import UpdateClass from './Components/UpdateClass';
import './App.css';
import PrivateRoute from "./Components/PrivateRoute";

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