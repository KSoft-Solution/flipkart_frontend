import { combineReducers } from "redux";
import { userReducer } from "../reducers/auth.reducer";
const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
