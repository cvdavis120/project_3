import React, { Component } from "react";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import weights from "../images/weights.jpg";
import Copyright from "../components/Copyright/";
// import googleBtn from "../components/GoogleBtn";
import { GoogleLogin } from "react-google-login";
import API from "../utils/API";
import { MyPaperLogin, MyGrid, MyFormLogin, MyImg } from "../components/Grid";
import InitialNav from "../components/Nav/index";

const responseGoogle = response => {
  console.log(response);
};

class SignInSide extends Component {
  state = {
    username: "",
    password: "",
    fireRedirect: false
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
        .then(res => {
          if (res != "bad") {
            this.setState({ fireRedirect: true });
          } else {
            console.log("That doesn't work");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { from } = this.props.location.state || "/";
    const { fireRedirect } = this.state;
    return (
      <>
        <InitialNav />
        <MyGrid>
          <Grid item xs={false} sm={8} md={7} lg={7} xl={7} />
          <img src={weights} width={"58.333%"} alt="weights placeholder" />
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            lg={5} xl={5}
            component={Paper}
            elevation={6}
            square
          >
            <MyPaperLogin>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <MyFormLogin>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.handleFormSubmit}
                >
                  Sign In
                </Button>
                {fireRedirect && <Redirect to={from || "/admin"} />}
                <GoogleLogin
                  clientId="527119401095-flf80nen6cgthtcso628cp0tg59tmcij.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/newuser" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </MyFormLogin>
            </MyPaperLogin>
          </Grid>
        </MyGrid>
      </>
    );
  }
}

export default SignInSide;

// import React, { Component } from "react";
// import { FormBtn, Input } from "../components/Form";
// import API from "../utils/API";

// class Login extends Component {
//   state = {
//     username: "",
//     password: ""
//   };

//   componentDidMount() {
//     console.log("Page has loaded");
//   }

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.username && this.state.password) {
//       API.userLogin({
//         username: this.state.username,
//         password: this.state.password
//       })
//         .then(res => console.log("user login"))
//         .catch(err => console.log(err));
//     }
//   };
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     return (
//       <form>
//         Enter Your Login ID <br></br>
//         <Input
//           className="userLoginID"
//           value={this.state.username}
//           onChange={this.handleInputChange}
//           name="username"
//           placeholder="Username"
//         />
//         Enter Your Password<br></br>
//         <Input
//           type="password"
//           className="userLoginPW"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//           name="password"
//           placeholder="Password"
//         />
//         <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
//       </form>
//     );
//   }
// }

// export default Login;
