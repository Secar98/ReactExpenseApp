import React from "react";

import { Route, Switch } from "react-router-dom";
import { Menu } from "./components/UI/Menu";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/Home" component={HomePage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Signup" component={SignupPage} />
        <Route path="/" />
      </Switch>
    </div>
  );
};

export default App;
