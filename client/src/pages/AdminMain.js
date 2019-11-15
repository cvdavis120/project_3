import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../components/UserPhoto";
import Navbar from "../components/Nav/admin.js";
import CustDropdown from "../components/CustDropdown";
import Retail from "../components/Retail";
class AdminMain extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Grid container spacing={12}>
          <Grid item xs={12} sm={3}>
            <CustDropdown />
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            This is where the calendar is going
          </Grid>
          <Grid item xs={12} sm={3}>
            This is where 'sales' items and checkout are going <Retail />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default AdminMain;
