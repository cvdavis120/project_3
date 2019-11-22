import React from "react";
import { connect } from "react-redux";
import { handleLogOut } from "../../actions/loggedIn";

const logOut = event => {
  this.props.dispatch(handleLogOut());
};

const AdminNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#faa552' }}>
        <a className="navbar-brand" href="/">
          Bookity Bookit
        </a>
        <a className="navbar-brand" href="/employee">
          Employee Page
        </a>
        <a className="navbar-brand" href="/user">
          User Page
        </a>
        <a className="navbar-brand" href="/newuser">
          New User
        </a>
        <a className="navbar-brand" href="/" onClick={logOut}>
          Log out
        </a>
      </nav>
    </div>
  );
};

export default AdminNav;
