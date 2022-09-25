// https://youtu.be/UrPsLzOvxsY
// kohta 2:16:47 - Part 5
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import { version } from "react";

console.log(`react version: ${version}`);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/HomePage" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
