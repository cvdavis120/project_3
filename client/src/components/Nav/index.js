import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Bookity Booker
      </a>
      <a className="navbar-brand" href="/newuser">
        New User
      </a>
      <a className="navbar-brand" href="/newworkspace">
        New Workspace
      </a>
    </nav>
  );
}

export default Nav;
