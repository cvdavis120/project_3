import { createStore, combineReducers } from "redux";
import appointmentsReducer from "../reducers/appointments";
import trainerAvailabilityReducer from "../reducers/trainerAvailability";
import adminInfoReducer from "../reducers/adminProfile"
export default () => {
  const store = createStore(
    combineReducers({
      appointments: appointmentsReducer,
      trainerAvailability: trainerAvailabilityReducer,
      adminProfile: adminInfoReducer
    })
  );

  return store;
};
