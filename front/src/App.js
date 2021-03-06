import "./App.css";
import { Route, Switch } from "react-router-dom";
import Join from "./pages/join";
import Login from "./pages/login";
import PasswordFind from "./pages/passwordFind";
import Schedule from "./pages/schedule";
import Calendar from "./pages/calendar";
import Memory from "./pages/memory";
import Write from "./pages/write";
import Detail from "./pages/detail";
import PlanUpdate from "./pages/planUpdate";
import Info from "./pages/info";
import React from "react";

const App = () => {
  return (
    <>
      {/* {logInDone && !logOutDone ? (
        <Route path="/" component={Schedule} exact={true} />
      ) : (
        <Route path="/" component={Login} exact={true} />
      )} */}
      <Route path="/" component={Schedule} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/join" component={Join} exact={true} />
      <Route path="/password" component={PasswordFind} exact={true} />
      <Route path="/calendar" component={Calendar} exact />
      <Route path="/calendar/:id" component={PlanUpdate} exact />
      <Route path="/memory" component={Memory} exact />
      <Switch>
        <Route path="/memory/write" component={Write} exact />
        <Route path="/memory/:id" component={Detail} exact />
      </Switch>
      <Route path="/info" component={Info} exact />
    </>
  );
};

export default App;
