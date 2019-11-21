import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles(theme => ({
  menuBox: {
    width: "100%",
    // // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    borderRadius: 3,
    border: 10,
    color: "red",
    // height: 48,
    // padding: '0 30px',
    boxShadow: "0 1px 2px 1px rgba(128,128,128, .3)"
  }
}));

const options = ["Business", "Employee", "User (Free)"];

export default function DropdownMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    console.log(selectedIndex);
    setSelectedIndex(index);

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menuBox}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="account-type-menu"
          aria-label="Choose Account Type"
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Choose Account Type *"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="account-type-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
