import React from "react";
import { connect } from "react-redux";
import { editAppointment } from "../actions/appointments";
import moment from "moment";
import AdminNav from "../components/Nav/admin";
import EditAppointmentForm from "../components/EditAppointmentForm/EditAppointmentForm";

const EditAppointmentPage = props => {
  let time = moment(props.appointment.startDate).format(
    "dddd MMMM Do YYYY h:mm a"
  );

  console.log("appointment: " + JSON.stringify(props.appointment));

  return (
    <>
      <AdminNav />
      <div>
        <p>{props.appointment.title}</p>
        <p>{time}</p>
        <button
          onClick={() => {
            props.dispatch(
              editAppointment(props.appointment.id, { title: "Available" })
            );
            props.history.push("/admin");
          }}
        >
          Mark Available
        </button>
        <EditAppointmentForm
          onSubmit={(name) => {
            props.dispatch(editAppointment(props.appointment.id, name ))
            props.history.push("/admin");
          }}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    appointment: state.appointments.find(
      appoint => appoint.id == props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditAppointmentPage);
