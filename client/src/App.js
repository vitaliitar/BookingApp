import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Home from "./pages/Home"
import { PrivateRoute } from "./components/PrivateRoute"

const App = () => {

  return (
    <Router>
      <Navbar />
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
    </Router>
  );
}

export default App;