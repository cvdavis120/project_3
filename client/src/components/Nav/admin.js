import React from "react";

const admin = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
        <a className="navbar-brand" href="/">
          Log out - needs correct routing
        </a>
      </nav>
    </div>
  );
};

export default admin;
