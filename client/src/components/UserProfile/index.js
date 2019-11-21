import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

// ReactReduxContext()
// console.log(ReactReduxContext);

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export default function ProfileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="h2">
          {props.firstName} {props.lastName}
        </Typography>
        <CardMedia
          component="img"
          alt={props.firstName + " " + props.lastName}
          height="140"
          className={classes.media}
          image="../images/avatar.jpg"
          title={props.firstName + " " + props.lastName}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Age: <br /> {props.age}
            Member since:{props.dateJoined}
            <br />
            Starting Weight:{props.startingWeight}
            <br />
            Curent Weight:{props.currentWeight}
            <br />
            Goal Weight:{props.goalWeight}
            <br />
            Notes:{props.notes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Purchase More Sessions
        </Button>
        <Button size="small" color="primary">
          Book New Appointment
        </Button>
      </CardActions>
    </Card>
  );
}
