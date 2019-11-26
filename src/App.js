import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Login from './components/login.component';
import Signup from './components/signup.component';

function App() {
  return (
    <Router>
      <div className="App">
         <div>
           <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light fixed top">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                
              </ul>
            </nav> 
           </div>
          
         </div>

        <div>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/lsignup" component={Signup}/>
          </Switch>
        </div>
      </div>

      
    </Router>
    
  );
}

export default App;
