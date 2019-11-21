const logInReducerDefaultState = {
  loggedIn: false
};

export default (state = logInReducerDefaultState, action) => {
  switch (action.type) {
    case "HANDLE_LOG_IN":
      return { loggedIn: true };
    case "HANDLE_LOG_OUT":
      return { loggedIn: false };
    default:
      return state;
  }
};
