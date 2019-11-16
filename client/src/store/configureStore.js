import { createStore, combineReducers } from 'redux';
import appointmentsReducer from '../reducers/appointments';
import trainerAvailabilityReducer from '../reducers/trainerAvailability';

export default () => {
  const store = createStore(
    combineReducers({
      appointments: appointmentsReducer,
      trainerAvailability: trainerAvailabilityReducer
    })
  );

  return store;
};