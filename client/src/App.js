import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/loginpage" component={LoginPage}></Route>
        <Route path="/registerpage" component={RegisterPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
