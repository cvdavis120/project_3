//UserInfo Reducer

const userInfoReducerDefaultState = {
  name: '',
  status: '',
  appointments: [],
  contact: {
    address: '',
    phone: '',
    email: ''
  }
};

export default (state = userInfoReducerDefaultState, action) => {
  switch (action.type) {
    case 'Test':
      return [
        ...state,
        action.userInfo
      ];
    
    default: 
      return state;
  }
};