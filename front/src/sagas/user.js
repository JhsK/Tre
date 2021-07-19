import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  NICK_CHANGE_REQUEST,
  NICK_CHANGE_SUCCESS,
  NICK_CHANGE_FAILURE,
  EMAIL_CHANGE_REQUEST,
  EMAIL_CHANGE_SUCCESS,
  EMAIL_CHANGE_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("http://localhost:3065/user/login", data);
}

function logOutAPI() {
  return axios.post("/user/logout");
}

function signUpAPI(data) {
  return axios.post("http://localhost:3065/user", data);
}

function nickChangeAPI() {
  return axios.post("/api/signUp");
}

function emailChangeAPI() {
  return axios.post("/api/signUp");
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
      //data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* logOut() {
  try {
    yield delay(1000);
    //const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      //data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      //data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* nickChagne(action) {
  try {
    yield delay(1000);
    //const result = yield call(nickChangeAPI, action.data);
    yield put({
      type: NICK_CHANGE_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: NICK_CHANGE_FAILURE,
      error: err.response.data,
    });
  }
}

function* emailChange(action) {
  try {
    yield delay(1000);
    //const result = yield call(emailChangeAPI, action.data);
    yield put({
      type: EMAIL_CHANGE_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: EMAIL_CHANGE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchNickChange() {
  yield takeLatest(NICK_CHANGE_REQUEST, nickChagne);
}

function* watchEmailChange() {
  yield takeLatest(EMAIL_CHANGE_REQUEST, emailChange);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchNickChange),
    fork(watchEmailChange),
  ]);
}
