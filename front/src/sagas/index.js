import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import postSaga from "./post";
import planSaga from "./plan";

//axios.defaults.baseURL = "https://treback.herokuapp.com/";
//axios.defaults.baseURL = "http://localhost:3065/";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(planSaga)]);
}
