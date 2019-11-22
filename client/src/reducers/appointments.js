//appointments Reducer


const appointmentsReducerDefaultState = [];


// [
// {
//   id: 1,
//   startDate: "2019-10-31 10:00",
//   endDate: "2019-10-31 11:00",
//   title: "Meeting"
// },
// {
//   id: 2,
//   startDate: "2019-11-01 18:00",
//   endDate: "2019-11-01 19:30",
//   title: "Go to a gym"
// },
// {
//   id: 3,
//   startDate: "2019-11-22 7:00",
//   endDate: "2019-11-22 7:30",
//   title: "Groceryies Store"
// },
// {
//   id: 4,
//   startDate: "2019-11-16 8:00",
//   endDate: "2019-11-16 8:30",
//   title: "Hair Cut",
//   rRule: "FREQ=WEEKLY;COUNT=10"
// }
// ];

export default (state = appointmentsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return [
        ...state,
        action.appointment
      ];
    case 'DELETE_APPOINTMENT':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_APPOINTMENT':
      return state.map((appointment) => {
        if (appointment.id === action.id) {
          return {
            ...appointment,
            ...action.updates
          };
        } else {
          return appointment;
        };
      });
    default: 
      return state;
  }
};