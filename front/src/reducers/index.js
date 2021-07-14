import { combineReducers } from "redux";
import user from "./user";
import plan from "./plan";
import menu from "./menu";
import post from "./post";

const rootReducer = combineReducers({
  user,
  plan,
  menu,
  post,
});

export default rootReducer;
