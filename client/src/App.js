import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./components/hoc/auth";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)}></Route>
        <Route path="/loginpage" component={Auth(LoginPage, false)}></Route>
        <Route
          path="/registerpage"
          component={Auth(RegisterPage, false)}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
