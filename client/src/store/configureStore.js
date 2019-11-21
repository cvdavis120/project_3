import { createStore, combineReducers } from "redux";
import appointmentsReducer from "../reducers/appointments";
import trainerAvailabilityReducer from "../reducers/trainerAvailability";
import adminInfoReducer from "../reducers/adminProfile";
import logInReducer from "../reducers/loggedIn";
export default () => {
  const store = createStore(
    combineReducers({
      appointments: appointmentsReducer,
      trainerAvailability: trainerAvailabilityReducer,
      adminProfile: adminInfoReducer,
      logIn: logInReducer
    })
  );

  return store;
};
