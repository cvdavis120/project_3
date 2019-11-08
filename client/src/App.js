import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import NewAdmin from "./pages/NewAdmin";
import NewWorkspace from "./pages/NewWorkspace";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div>
            <Nav />
            <Route exact path="/" component={Login} />
            <Route exact path="/newadmin" component={NewAdmin} />
            <Route exact path="/newworkspace" component={NewWorkspace} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
