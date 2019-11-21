import React from 'react';
import { connect } from 'react-redux';
import { editAppointment} from '../actions/appointments';
import EditAppointmentForm from '../components/EditAppointmentForm/EditAppointmentForm';
import moment from 'moment'

const EditAppointmentPage = (props) => {
  let time = moment(props.appointment.startDate).format('dddd MMMM Do YYYY h:mm a');
  
  console.log('appointment: ' + JSON.stringify(props.appointment))


  return (
    <div>
      <p>{props.appointment.title}</p>
      <p>{time}</p>
      <EditAppointmentForm 
        onSubmit={(appointment) => {
          props.dispatch(editAppointment(props.appointment.id, appointment))
          props.history.push('/admin')
        }}
      />
      <button onClick={() => {
        props.dispatch(editAppointment(props.appointment.id, {title: 'Available'}))
        props.history.push('/admin')
      }}>Mark as Available</button>
    </div>
  )
};

const mapStateToProps = (state, props) => {

  return {
    appointment: state.appointments.find((appoint) => appoint.id == props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditAppointmentPage);