import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  signInBox: {
    width: "100%",
    borderRadius: 3,
    border: 10,
    boxShadow: "0 1px 3px 2px rgba(128,128,128, .6)"
  }
}));

export function MyContainer(props) {
  const classes = useStyles();
  return (
    <Container
      {...props}
      className={classes.signInBox}
      component="main"
      maxWidth="xs"
    >
      {props.children}
    </Container>
  );
}

export function MyPaper(props) {
  const classes = useStyles();
  return (
    <div {...props} className={classes.paper}>
      {" "}
      {props.children}
    </div>
  );
}

export function MyForm(props) {
  const classes = useStyles();
  return (
    <form {...props} className={classes.form} noValidate>
      {props.children}
    </form>
  );
}

// export function myButton(props) {
//   const classes = useStyles();

//   return (
//     <Button {...props} className={classes.submit}>
//       {props.children}
//     </Button>
//   );
// }
