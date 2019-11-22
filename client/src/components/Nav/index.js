import React from "react";

function InitialNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#faa552' }}>
      <a className="navbar-brand" href="/">
        Bookity Bookit
      </a>
      <a className="navbar-brand" href="/admin">
        Admin Page
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
      <a className="navbar-brand" href="/retail">
        Retail
      </a>
      <a className="navbar-brand" href="/login">
        Log in
      </a>
    </nav>
  );
}

export default InitialNav;
