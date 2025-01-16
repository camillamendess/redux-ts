import { combineReducers } from "redux";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  // Add your reducers here
  userReducer
});

export default rootReducer; 