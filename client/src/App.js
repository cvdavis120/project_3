import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import NewWorkspace from "./pages/NewWorkspace";
import Nav from "./components/Nav";
import AdminMain from "./pages/AdminMain";
import EmployeeMain from "./pages/EmployeeMain";
import ClientMain from "./pages/UserMain";
import Retail from "./pages/Retail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <>
            <Nav />
            <Route exact path="/" component={Login} />
            <Route exact path="/admin" component={AdminMain} />
            <Route exact path="/user" component={ClientMain} />
            <Route exact path="/employee" component={EmployeeMain} />
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/newworkspace" component={NewWorkspace} />
            <Route exact path="/retail" component={Retail} />
            <Route exact path="/login" component={Login} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//add Routes for the different pages above
