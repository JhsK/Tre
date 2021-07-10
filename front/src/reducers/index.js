import { combineReducers } from "redux";
import user from "./user";
import plan from "./plan";
import menu from "./menu";
import write from "./write";

const rootReducer = combineReducers({
  user,
  plan,
  menu,
  write,
});

export default rootReducer;
