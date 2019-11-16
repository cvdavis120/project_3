import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import weights from "../images/weights.jpg";
import Copyright from "../components/Copyright/";
// import googleBtn from "../components/GoogleBtn";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(../images/weights.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={8} md={7} />
      {/* <img src={weights} width="150" height="150" /> */}
      <img src={weights} width="400" alt="weights placeholder" />

      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
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
              className={classes.submit}
            >
              Sign In
            </Button>
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
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

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
