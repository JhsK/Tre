import { combineReducers } from "redux";
import user from "./user";
import plan from "./plan";
import menu from "./menu";
import write from "./write";
import post from "./post";

const rootReducer = combineReducers({
  user,
  plan,
  menu,
  write,
  post,
});

export default rootReducer;
