import { combineReducers } from "redux";
import user from "./user";
import plan from "./plan";
import menu from "./menu";

const rootReducer = combineReducers({
  user,
  plan,
  menu,
});

export default rootReducer;
