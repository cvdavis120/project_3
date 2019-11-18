import React from 'react';
import { connect } from 'react-redux';
import { editAppointment} from '../actions/appointments';

const EditAppointmentPage = (props) => {
  
  console.log('appointment: ' + JSON.stringify(props.appointment))

  return (
    <div>
      <p>{props.appointment.title}</p>
      <p>{props.appointment.startDate} to {props.appointment.endDate}</p>
      <button onClick={() => {
        props.dispatch(editAppointment({ id: props.appointment.id, }))
      }}>Book Appointment</button>
      
    </div>
  )
};

const mapStateToProps = (state, props) => {

  return {
    appointment: state.appointments.find((appoint) => appoint.id == props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditAppointmentPage);