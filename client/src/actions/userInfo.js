



export const addUser = ( 
  {
    email = '',
    password = '',
    account_type = 'Admin',
    firstName = '',
    lastName= ''  
  }
) => ({
  type: 'ADD_USER',
  currentUser: {
    email,
    password,
    account_type,
    firstName,
    lastName
  }
});