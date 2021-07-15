import produce from "immer";

export const initialState = {
  planData: [
    {
      id: 1,
      title: "첫 번째 일정입니다.",
      start: "2021-07-14T15:00:00.000Z",
      end: "2021-07-14T15:00:00.000Z",
      dateValue: "2021-07-15",
    },
    {
      id: 2,
      title: "두 번째 일정입니다.",
      start: "2021-07-15T15:00:00.000Z",
      end: "2021-07-15T15:00:00.000Z",
      dateValue: "2021-07-16",
    },
  ],
  addPlanLoading: false,
  addPlanDone: false,
  addPlanError: null,
  updatePlanLoading: false,
  updatePlanDone: false,
  updatePlanError: null,
};

export const ADD_PLAN_REQUEST = "ADD_PLAN_REQUEST";
export const ADD_PLAN_SUCCESS = "ADD_PLAN_SUCCESS";
export const ADD_PLAN_FAILURE = "ADD_PLAN_FAILURE";

export const UPDATE_PLAN_REQUEST = "UPDATE_PLAN_REQUEST";
export const UPDATE_PLAN_SUCCESS = "UPDATE_PLAN_SUCCESS";
export const UPDATE_PLAN_FAILURE = "UPDATE_PLAN_FAILURE";

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
      default:
        return state;
    }
  });
};

export default plan;
