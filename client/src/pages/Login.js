import React, { Component } from "react";
import { FormBtn, Input } from "../components/Form";
import API from "../utils/API";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    console.log("Page has loaded");
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.userLogin({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => console.log("user login"))
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
        Enter Your Login ID <br></br>
        <Input
          className="userLoginID"
          value={this.state.username}
          onChange={this.handleInputChange}
          name="username"
          placeholder="Username"
        />
        Enter Your Password<br></br>
        <Input
          type="password"
          className="userLoginPW"
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
          placeholder="Password"
        />
        <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
      </form>
    );
  }
}

export default Login;
