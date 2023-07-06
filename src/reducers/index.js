import { combineReducers } from "redux";
import venueReducer from "./venueReducer";

const rootReducer = combineReducers({
  venues: venueReducer,
});

export default rootReducer;
