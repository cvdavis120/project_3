import uuid from 'uuid';

export const grabProfile = (
  {
    _id = '',
    fullName = '',
    firstName = '',
    lastName = '',
  } = {}
) => ({
  type: 'GRAB_PROFILE',
  profile: {
    _id,
    fullName,
    firstName,
    lastName
  }
});


//keeping these below in case I need to reference for deleting or editing profile

// export const deleteAppointment = ({ id } = {}) => ({
//   type: 'DELETE_APPOINTMENT',
//   id
// });

// export const editAppointment = (id, updates) => ({
//   type: 'EDIT_APPOINTMENT',
//   id,
//   updates
// });