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

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="h2">
          Person's name (name from selected dropdown. Should default to logged
          in user)
        </Typography>
        <CardMedia
          className={classes.media}
          image="props.image" //from their google image
          title="props.name?"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Age: <br />
            Member since:
            <br />
            Starting Weight:
            <br />
            Curent Weight:
            <br />
            Goal Weight:
            <br />
            Notes:
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
