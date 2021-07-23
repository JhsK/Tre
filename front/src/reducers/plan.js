import produce from "immer";

export const initialState = {
  planData: [
    // {
    //   id: 1,
    //   title: "첫 번째 일정입니다.",
    //   start: "2021-07-14T15:00:00.000Z",
    //   end: "2021-07-14T15:00:00.000Z",
    //   dateValue: "2021-07-15",
    //   planDoneCheck: false,
    // },
    // {
    //   id: 2,
    //   title: "두 번째 일정입니다.",
    //   start: "2021-07-15T15:00:00.000Z",
    //   end: "2021-07-15T15:00:00.000Z",
    //   dateValue: "2021-07-16",
    //   planDoneCheck: false,
    // },
  ],
  addPlanLoading: false,
  addPlanDone: false,
  addPlanError: null,
  updatePlanLoading: false,
  updatePlanDone: false,
  updatePlanError: null,
  donePlanLoading: false,
  donePlanDone: false,
  donePlanError: null,
  removePlanLoading: false,
  removePlanDone: false,
  removePlanError: null,
  loadPlanLoading: false,
  loadPlanDone: false,
  loadPlanError: null,
};

export const ADD_PLAN_REQUEST = "ADD_PLAN_REQUEST";
export const ADD_PLAN_SUCCESS = "ADD_PLAN_SUCCESS";
export const ADD_PLAN_FAILURE = "ADD_PLAN_FAILURE";

export const UPDATE_PLAN_REQUEST = "UPDATE_PLAN_REQUEST";
export const UPDATE_PLAN_SUCCESS = "UPDATE_PLAN_SUCCESS";
export const UPDATE_PLAN_FAILURE = "UPDATE_PLAN_FAILURE";

export const REMOVE_PLAN_REQUEST = "REMOVE_PLAN_REQUEST";
export const REMOVE_PLAN_SUCCESS = "REMOVE_PLAN_SUCCESS";
export const REMOVE_PLAN_FAILURE = "REMOVE_PLAN_FAILURE";

export const DONE_PLAN_REQUEST = "DONE_PLAN_REQUEST";
export const DONE_PLAN_SUCCESS = "DONE_PLAN_SUCCESS";
export const DONE_PLAN_FAILURE = "DONE_PLAN_FAILURE";

export const LOAD_PLAN_REQUEST = "LOAD_PLAN_REQUEST";
export const LOAD_PLAN_SUCCESS = "LOAD_PLAN_SUCCESS";
export const LOAD_PLAN_FAILURE = "LOAD_PLAN_FAILURE";

export const addPlan = (data) => {
  return {
    type: ADD_PLAN_REQUEST,
    data,
  };
};

export const updatePlan = (data) => {
  return {
    type: UPDATE_PLAN_REQUEST,
    data,
  };
};

const plan = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_PLAN_REQUEST:
        draft.addPlanLoading = true;
        draft.addPlanDone = false;
        draft.addPlanError = null;
        break;
      case ADD_PLAN_SUCCESS:
        draft.addPlanLoading = false;
        draft.addPlanDone = true;
        draft.planData.push(action.data);
        break;
      case ADD_PLAN_FAILURE:
        draft.addPlanLoading = false;
        draft.addPlanError = action.error;
        break;
      case UPDATE_PLAN_REQUEST:
        draft.updatePlanLoading = true;
        draft.updatePlanDone = false;
        draft.updatePlanError = null;
        break;
      case UPDATE_PLAN_SUCCESS:
        const planData = draft.planData;
        planData[draft.planData.findIndex((a) => a.id === action.data.id)] =
          action.data;
        draft.planData = planData;
        draft.updatePlanLoading = true;
        draft.updatePlanDone = false;
        draft.updatePlanError = null;
        break;
      case UPDATE_PLAN_FAILURE:
        draft.updatePlanLoading = false;
        draft.updatePlanError = action.error;
        break;
      case REMOVE_PLAN_REQUEST:
        draft.removePlanLoading = true;
        draft.removePlanDone = false;
        draft.removePlanError = null;
        break;
      case REMOVE_PLAN_SUCCESS:
        draft.removePlanLoading = false;
        draft.removePlanDone = true;
        draft.planData = draft.planData.filter((v) => v.id !== action.data);
        break;
      case REMOVE_PLAN_FAILURE:
        draft.removePlanLoading = false;
        draft.removePlanError = action.error;
        break;
      case LOAD_PLAN_REQUEST:
        draft.loadPlanLoading = true;
        draft.loadPlanDone = false;
        draft.loadPlanError = null;
        break;
      case LOAD_PLAN_SUCCESS:
        console.log(action.data);
        draft.loadPlanLoading = false;
        draft.loadPlanDone = true;
        draft.planData = action.data;
        break;
      case LOAD_PLAN_FAILURE:
        draft.loadPlanLoading = false;
        draft.loadPlanError = action.error;
        break;
      case DONE_PLAN_REQUEST:
        draft.donePlanLoading = true;
        draft.donePlanDone = false;
        draft.donePlanError = null;
        break;
      case DONE_PLAN_SUCCESS:
        const planDatas = draft.planData;
        planDatas[
          draft.planData.findIndex((a) => a.id === action.data)
        ].planDoneCheck = true;
        draft.planData = planDatas;
        draft.donePlanLoading = false;
        draft.donePlanDone = true;
        break;
      case DONE_PLAN_FAILURE:
        draft.donePlanLoading = false;
        draft.donePlanError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default plan;
