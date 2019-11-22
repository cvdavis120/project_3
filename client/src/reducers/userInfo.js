//UserInfo Reducer

const userInfoReducerDefaultState = {
    email: '',
    password: '',
    account_type: '',
    firstName: '',
    lastName: ''
};

export default (state = userInfoReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.currentUser;
    
    default: 
      return state;
  }
};