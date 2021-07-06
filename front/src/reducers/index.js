import { combineReducers } from "redux";
import user from "./user";
import plan from "./plan";

const rootReducer = combineReducers({
  user,
  plan,
});

export default rootReducer;
