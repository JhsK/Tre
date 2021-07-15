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
  switch (action.type) {
    case ADD_PLAN_REQUEST:
      return {
        ...state,
        addPlanLoading: true,
        addPlanDone: false,
        addPlanError: null,
      };
    case ADD_PLAN_SUCCESS:
      return {
        ...state,
        planData: [...state.planData, action.data],
        addPlanLoading: false,
        addPlanDone: true,
      };
    case ADD_PLAN_FAILURE:
      return {
        ...state,
        addPlanLoading: false,
        addPlanError: action.error,
      };
    case UPDATE_PLAN_REQUEST:
      return {
        ...state,
        updatePlanLoading: true,
        updatePlanDone: false,
        updatePlanError: null,
      };
    case UPDATE_PLAN_SUCCESS:
      const planData = [...state.planData];
      const idx = state.planData.findIndex((a) => a.id === action.data.id);
      planData[idx] = action.data;

      return {
        ...state,
        planData: [...planData],
        updatePlanLoading: false,
        updatePlanDone: true,
      };
    case UPDATE_PLAN_FAILURE:
      return {
        ...state,
        updatePlanLoading: false,
        updatePlanError: action.error,
      };
    default:
      return state;
  }
};

export default plan;
