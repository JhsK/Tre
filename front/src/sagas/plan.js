import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_PLAN_REQUEST,
  ADD_PLAN_SUCCESS,
  ADD_PLAN_FAILURE,
  UPDATE_PLAN_REQUEST,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PLAN_FAILURE,
  REMOVE_PLAN_REQUEST,
  REMOVE_PLAN_SUCCESS,
  REMOVE_PLAN_FAILURE,
  DONE_PLAN_REQUEST,
  DONE_PLAN_SUCCESS,
  DONE_PLAN_FAILURE,
} from "../reducers/plan";

function addPlanAPI(data) {
  return axios.post("/api/plan", data);
}

function updatePlanAPI(data) {
  return axios.post("/api/plan", data);
}

function removePlanAPI(data) {
  return axios.post("/api/plan", data);
}

function donePlanAPI(data) {
  return axios.post("/api/plan", data);
}

function* addPlan(action) {
  try {
    //const reuslt = yield call(addPlanAPI, action.data);
    yield put({
      type: ADD_PLAN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* updatePlan(action) {
  try {
    //const reuslt = yield call(updatePlanAPI, action.data);
    yield put({
      type: UPDATE_PLAN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* removePlan(action) {
  try {
    //const reuslt = yield call(removePlanAPI, action.data);
    yield put({
      type: REMOVE_PLAN_SUCCESS,
      data: action.id,
    });
  } catch (err) {
    yield put({
      type: REMOVE_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* donePlan(action) {
  try {
    //const reuslt = yield call(donePlanAPI, action.data);
    console.log(action);
    yield put({
      type: DONE_PLAN_SUCCESS,
      data: action.id,
    });
  } catch (err) {
    yield put({
      type: DONE_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPlan() {
  yield takeLatest(ADD_PLAN_REQUEST, addPlan);
}

function* watchUpdatePlan() {
  yield takeLatest(UPDATE_PLAN_REQUEST, updatePlan);
}

function* watchRemovePlan() {
  yield takeLatest(REMOVE_PLAN_REQUEST, removePlan);
}

function* watchDonePlan() {
  yield takeLatest(DONE_PLAN_REQUEST, donePlan);
}

export default function* planSaga() {
  yield all([
    fork(watchAddPlan),
    fork(watchUpdatePlan),
    fork(watchDonePlan),
    fork(watchRemovePlan),
  ]);
}
