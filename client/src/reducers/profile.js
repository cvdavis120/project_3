//appointments Reducer

//call mongo db and grab data with a function or ajax call... import that in to here. then call that in appointmentReducerDefaultState below



const profileReducerDefaultState = [
  {
    _id: "id123",
    fullName: "firstName LastName",
    firstName: "FirstName",
    lastName: "LastName"
  }
];

export default (state = profileReducerDefaultState, action) => {
  switch (action.type) {
    case 'GRAB_PROFILE':
      return [
        ...state,
        action.profile
      ];
    // case 'DELETE_APPOINTMENT':
    //   return state.filter(({id}) => id !== action.id);
    // case 'EDIT_APPOINTMENT':
    //   return state.map((appointment) => {
    //     if (profile.id === action.id) {
    //       return {
    //         ...appointment,
    //         ...action.updates
    //       };
    //     } else {
    //       return profile;
    //     };
    //   });
    default:
      return state;
  }
};