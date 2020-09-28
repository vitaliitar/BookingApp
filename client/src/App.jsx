import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import { PrivateRoute } from './components/PrivateRoute';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default App;
