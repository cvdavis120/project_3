import React from "react";
import "./style.css";
// import { newUserData } from '../pages/Login'
// import { Dropdown, DropdownButton } from 'reactstrap'

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success logInBtn">
      {props.children}
    </button>
  );
}
