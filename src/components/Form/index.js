import React from "react"
import "./style.css"
import { newUserData } from '../pages/Login'
// import { Dropdown, DropdownButton } from 'reactstrap'

export function FormInput(props) {
  console.log(props);
  return (
    <div>
      Choose Your Login ID <br></br>
      <input className="userLoginID" placeholder="Username or E-mail Address" {...props} /><br></br>
      Choose Password<br></br>
      <input type="password" className="userLoginPW" placeholder="Passsword" {...props} /><br></br>
      Confirm Passsword<br></br>
      <input type="password" className="userLoginPWConfirm" placeholder="Confirm Password" {...props} /><br></br>
    </div>
  );
};
export function FormBtn(props) {
  console.log(props);
  return (
    <button onClick={newUserData} {...props} className="btn btn-success logInBtn">
      {props.children} Log-in
    </button>
  );
}

