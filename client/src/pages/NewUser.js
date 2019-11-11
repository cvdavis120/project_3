import React, { Component } from "react";
import { FormBtn, Input } from "../components/Form";
import API from "../utils/API";

class NewUser extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: ""
  };

  componentDidMount() {
    console.log("Page has loaded");
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.password === this.state.confirmPassword &&
      this.state.username &&
      this.state.password
    ) {
      API.newUser({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => console.log("new user added"))
        .catch(err => console.log(err));
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        Choose Your Login ID <br></br>
        <Input
          className="userLoginID"
          value={this.state.username}
          onChange={this.handleInputChange}
          name="username"
          placeholder="Please Select a Username"
        />
        Choose Password<br></br>
        <Input
          className="userLoginPW"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
          placeholder="Please Select a Password"
        />
        Confirm Passsword<br></br>
        <Input
          className="userLoginPWConfirm"
          type="password"
          value={this.state.confirmPassword}
          onChange={this.handleInputChange}
          name="confirmPassword"
          placeholder="Please Confirm Your Password"
        />
        <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
      </form>
    );
  }
}

export default NewUser;
