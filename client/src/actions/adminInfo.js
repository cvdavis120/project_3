
export const addUser = (
  {
    email = '',
    password = '',
    account_type = 'Admin',
    firstName = '',
    lastName = ''
  }
) => ({
  type: 'UPDATE_ADMIN_PROFILE',
  currentUser: {
    email,
    password,
    account_type,
    firstName,
    lastName
  }
});