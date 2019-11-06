import React, { Component } from 'react';
import { FormInput, FormBtn } from '../components/Form'
import API from '../utils/API'

class Login extends Component {
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

