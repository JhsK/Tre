import "./App.css";
import { Route } from "react-router-dom";
import Join from "./pages/join";
import Login from "./pages/login";
import PasswordFind from "./pages/passwordFind";
import Schedule from "./pages/schedule";
import Calendar from "./pages/calendar";
import Memory from "./pages/memory";
import Write from "./pages/write";
import Detail from "./pages/detail";
import PlanUpdate from "./pages/planUpdate";
import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const { logInDone } = useSelector((state) => state.user);
  return (
    <>
      {logInDone ? (
        <Route path="/" component={Schedule} exact={true} />
      ) : (
        <Route path="/" component={Login} exact={true} />
      )}
      <Route path="/join" component={Join} exact={true} />
      <Route path="/password" component={PasswordFind} exact={true} />
      <Route path="/calendar" component={Calendar} exact />
      <Route path="/calendar/:id" component={PlanUpdate} exact />
      <Route path="/memory" component={Memory} exact />
      <Route path="/memory/write" component={Write} exact />
      <Route path="/memory/:id" component={Detail} exact />
    </>
  );
};

export default App;
