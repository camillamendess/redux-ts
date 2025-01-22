import { combineReducers } from "redux";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  // Add your reducers here
  userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer; 