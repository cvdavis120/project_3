import React, { Component } from 'react';
import { FormInput, FormBtn } from '../components/Form'
import API from '../utils/API'

class Login extends Component {

  state = {
    username: "",
    password: "",
    confirmPassword: ""

  }

  componentDidMount() {
    console.log("Page has loaded");
  }

  newUserData = () => {
    let userNameData = this.userLoginID
    let userPassword = this.userLoginPW
    let userConfirmPassword = this.userLoginPWConfirm
    console.log(userNameData);
    this.setState({ username: userNameData, password: userPassword, confirmPassword: userConfirmPassword })

      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if ((this.state.password === this.state.confirmPassword)(this.state.username && this.state.password)) {
      API.newUser({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => console.log("new user added"))
        .catch(err => console.log(err));
    }
  };



  render() {
    return (
      <form>
        <div>

          <FormInput />
          <FormBtn />
        </div>


      </form>
    );
  }
}

export default Login;

