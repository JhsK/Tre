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
  LOAD_PLAN_REQUEST,
  LOAD_PLAN_SUCCESS,
  LOAD_PLAN_FAILURE,
} from "../reducers/plan";

function addPlanAPI(data) {
  return axios.post("/plan", data);
}

function updatePlanAPI(data) {
  return axios.patch(`/plan/${data.id}`, data);
}

function removePlanAPI(data) {
  return axios.delete(`/plan/${data}`);
}

function donePlanAPI(data) {
  return axios.patch(`/plan/done/${data}`, data);
}

function loadPlanAPI() {
  return axios.get("/plan/load");
}

function* addPlan(action) {
  try {
    const result = yield call(addPlanAPI, action.data);
    yield put({
      type: ADD_PLAN_SUCCESS,
      data: result.data,
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
    const result = yield call(updatePlanAPI, action.data);
    yield put({
      type: UPDATE_PLAN_SUCCESS,
      data: result.data,
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
    const result = yield call(removePlanAPI, action.id);
    yield put({
      type: REMOVE_PLAN_SUCCESS,
      data: result.data,
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
    const reuslt = yield call(donePlanAPI, action.id);
    yield put({
      type: DONE_PLAN_SUCCESS,
      data: reuslt.data,
    });
  } catch (err) {
    yield put({
      type: DONE_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* loadPlan(action) {
  try {
    const result = yield call(loadPlanAPI);
    yield put({
      type: LOAD_PLAN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_PLAN_FAILURE,
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

function* watchLoadPlan() {
  yield takeLatest(LOAD_PLAN_REQUEST, loadPlan);
}

export default function* planSaga() {
  yield all([
    fork(watchAddPlan),
    fork(watchUpdatePlan),
    fork(watchDonePlan),
    fork(watchRemovePlan),
    fork(watchLoadPlan),
  ]);
}
