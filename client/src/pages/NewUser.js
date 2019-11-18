import React, { Component } from "react";
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
import {
  MyContainer,
  MyPaper,
  MyForm,
  MyButton
} from "../components/Container";

class SignUp extends Component {
  state = {
    account_type: "",
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
                <DropdownMenu />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
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
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary">
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
