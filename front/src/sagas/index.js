import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import postSaga from "./post";
import planSaga from "./plan";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(planSaga)]);
}
