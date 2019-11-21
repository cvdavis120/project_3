import { createStore, combineReducers } from 'redux';
import appointmentsReducer from '../reducers/appointments';
import trainerAvailabilityReducer from '../reducers/trainerAvailability';
import profile from "../reducers/profile"
export default () => {
  const store = createStore(
    combineReducers({
      appointments: appointmentsReducer,
      trainerAvailability: trainerAvailabilityReducer,
      profile: profile
    })
  );

  return store;
};