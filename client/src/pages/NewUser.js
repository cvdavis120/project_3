import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DropdownMenu from "../components/Dropdown";
import Copyright from "../components/Copyright";
import API from "../utils/API";
import { MyContainer, MyPaper, MyForm } from "../components/Container";

class SignUp extends Component {
  state = {
    account_type: "Admin",
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  componentDidMount() {
    console.log("Page has loaded");
  }

  handleFormSubmitAdmin = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.adminSignUp({
        email: this.state.email,
        password: this.state.password,
        account_type: this.state.account_type,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
        .then(res => console.log("user signed-up"))
        .catch(err => console.log(err));
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleChange = (event, index, value) => {
    console.log(value);
    this.setState({ account_type: value });
    console.log(this.state.account_type);
  };
  setAccountType = index => {
    const options = ["User (Free)", "Employee", "Business"];
    // this.setState({ account_type: options[index] });
    console.log(index);
  };

  render() {
    return (
      <MyContainer>
        <MyPaper>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <MyForm>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <DropdownMenu setAccount={this.setAccountType} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleFormSubmitAdmin}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </MyForm>
        </MyPaper>

        <Box mt={5}>
          <Copyright />
        </Box>
      </MyContainer>
    );
  }
}

export default SignUp;
