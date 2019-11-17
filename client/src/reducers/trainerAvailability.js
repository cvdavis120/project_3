//trainerAvailablity Reducer

const trainerAvailabilityReducerDefaultState = [];

export default (state = trainerAvailabilityReducerDefaultState, action) => {
  switch (action.type) {
    case 'Test':
      return [
        ...state,
        action.trainerAvailability
      ];
    
    default: 
      return state;
  }
};