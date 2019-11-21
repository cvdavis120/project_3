import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../components/UserProfile";
import Navbar from "../components/Nav/admin.js";
import CustDropdown from "../components/CustDropdown";
import Retail from "../components/Retail";
import MainCalendar from "../components/MainCalendar/MainCalendar";
import { connect } from "react-redux";
import { addAppointment } from "../actions/appointments";
import store from "../store/configureStore"


class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log("admin main store: ", { store });
    console.log("admin main component: ", { Component });

  }
  render() {
    console.log("adminMain: state", this.state);
    return (
      <div>
        <Navbar />
        <Grid container spacing={12}>
          <Grid item xs={12} sm={3}>
            <CustDropdown />
            <ProfileCard
              firstName={this.props.adminProfile.firstName} />
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
  }
}
export default connect(mapStateToProps)(AdminMain)

