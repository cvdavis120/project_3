import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../App.css";
import Login from "../pages/Login";
import NewUser from "../pages/NewUser";
import NewWorkspace from "../pages/NewWorkspace";
import Nav from "../components/Nav";
import AdminMain from "../pages/AdminMain";
import EmployeeMain from "../pages/EmployeeMain";
import ClientMain from "../pages/UserMain";
import EditAppointment from "../pages/EditAppointment";

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={AdminMain} />
        <Route exact path="/user" component={ClientMain} />
        <Route exact path="/employee" component={EmployeeMain} />
        <Route exact path="/newuser" component={NewUser} />
        <Route exact path="/newworkspace" component={NewWorkspace} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/editappointment/:id" component={EditAppointment} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;