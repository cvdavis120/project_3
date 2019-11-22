import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../components/UserProfile";

import CustDropdown from "../components/CustDropdown";
import Retail from "../components/Retail";
import MainCalendar from "../components/MainCalendar/MainCalendar";
import { connect } from "react-redux";
import { addAppointment } from "../actions/appointments";
import AdminNav from "../components/Nav/admin";
import store from "../store/configureStore";
import API from "../utils/API"

class AdminMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("admin main store: ", { store });
    // console.log("admin main component: ", { Component });
  }

  componentDidMount() {
    API.getAllEvents()
    .then(res => {
      for (var i = 0; i < res.length; i++) {
        this.props.dispatch(addAppointment(res[i]))
      }
    });
  }

  render() {
    console.log("adminMain: state", this.state);
    return (
      <div>
        <AdminNav />
        <Grid container spacing={12}>
          <Grid item xs={12} sm={3}>
            <CustDropdown />
            <ProfileCard
              userImage={this.props.adminProfile.userImage}
              firstName={this.props.adminProfile.firstName}
              lastName={this.props.adminProfile.lastName}
              dateJoined={this.props.adminProfile.dateJoined}
              startingWeight={this.props.adminProfile.startingWeight}
              currentWeight={this.props.adminProfile.currentWeight}
              goalWeight={this.props.adminProfile.goalWeight}
              notes={this.props.adminProfile.notes}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MainCalendar
              onAppointmentAdd={appointment => {
                this.props.dispatch(addAppointment(appointment));
                console.log(appointment);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            This is where 'sales' items and checkout are going <Retail />
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    adminProfile: state.adminProfile
  };
};
export default connect(mapStateToProps)(AdminMain);
