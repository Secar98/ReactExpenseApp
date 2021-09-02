import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Menu } from "./components/UI/Menu";

import { JwtContext } from "./context/JwtContext";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <JwtContext.Provider value={{ token, setToken }}>
        <Redirect to="/Login" />
        <Menu />
        <Switch>
          <Route path="/Login" component={LoginPage} />
          <Route path="/Signup" component={SignupPage} />
          {token ? <Route path="/Home" component={HomePage} /> : <div />}
        </Switch>
      </JwtContext.Provider>
    </div>
  );
};

export default App;
