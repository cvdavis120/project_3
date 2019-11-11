import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import NewWorkspace from "./pages/NewWorkspace";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <>
            <Nav />
            <Route exact path="/" component={Login} />
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/newworkspace" component={NewWorkspace} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
