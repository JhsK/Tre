import "./App.css";
import { Route } from "react-router-dom";
import Join from "./pages/join";
import Login from "./pages/login";
import PasswordFind from "./pages/passwordFind";
import Schedule from "./pages/schedule";
import Calendar from "./pages/calendar";
import Memory from "./pages/memory";
import React from "react";

const App = () => {
  return (
    <>
      <Route path="/" component={Login} exact={true} />
      <Route path="/join" component={Join} exact={true} />
      <Route path="/password" component={PasswordFind} exact={true} />
      <Route path="/schedule" component={Schedule} exact={true} />
      <Route path="/calendar" component={Calendar} exact />
      <Route path="/memory" component={Memory} exact />
    </>
  );
};

export default App;
