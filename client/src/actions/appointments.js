import uuid from 'uuid';

export const addAppointment = (
  {
    startDate = '',
    endDate = '',
    title = '',
    id = ''
  } = {}
) => ({
  type: 'ADD_APPOINTMENT',
  appointment: {
    id,
    startDate,
    endDate,
    title
  }
});

export const deleteAppointment = ( id = '') => ({
  type: 'DELETE_APPOINTMENT',
  id
});

export const editAppointment = (id, updates) => ({
  type: 'EDIT_APPOINTMENT',
  id,
  updates
});