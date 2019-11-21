const adminInfoReducerDefaultState = {
  email: "email.com",
  password: "sdfsdf",
  account_type: "Admin",
  firstName: "firstname",
  lastName: "brutocao"
  // dateJoined: ""
};

export default (state = adminInfoReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_ADMIN_PROFILE':
      return action.currentUser;
    default:
      return state;
  }
};


