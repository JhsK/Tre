import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_PLAN_REQUEST,
  ADD_PLAN_SUCCESS,
  ADD_PLAN_FAILURE,
  UPDATE_PLAN_REQUEST,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PLAN_FAILURE,
} from "../reducers/plan";

function addPlanAPI(data) {
  return axios.post("/api/plan", data);
}

function updatePlanAPI(data) {
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

function* watchAddPlan() {
  yield takeLatest(ADD_PLAN_REQUEST, addPlan);
}

function* watchUpdatePlan() {
  yield takeLatest(UPDATE_PLAN_REQUEST, updatePlan);
}

export default function* planSaga() {
  yield all([fork(watchAddPlan), fork(watchUpdatePlan)]);
}
