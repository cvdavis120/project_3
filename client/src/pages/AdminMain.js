import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../components/UserPhoto";
import Navbar from "../components/Nav/admin.js";
import CustDropdown from "../components/CustDropdown";
import Retail from "../components/Retail";
import MainCalendar from "../components/MainCalendar/MainCalendar"
import { connect } from 'react-redux';
import { addAppointment } from "../actions/appointments"

class AdminMain extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container spacing={12}>
          <Grid item xs={12} sm={3}>
            <CustDropdown />
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={6}>
          <MainCalendar onAppointmentAdd={(appointment) => {
            this.props.dispatch(addAppointment(appointment));
            console.log(appointment)
          }}
          />
          </Grid>
          <Grid item xs={12} sm={3}>
            This is where 'sales' items and checkout are going <Retail />
          </Grid>
        </Grid>
        </div>
    )
  }
};



export default connect()(AdminMain);
