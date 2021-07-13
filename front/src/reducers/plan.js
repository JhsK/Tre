export const initialState = {
  planData: [
    {
      title: "첫 번째 일정입니다.",
      start: "2021-07-14T15:00:00.000Z",
      end: "2021-07-14T15:00:00.000Z",
      dateValue: "2021-07-15",
    },
  ],
};

export const planAddAction = (data) => {
  return {
    type: "PLAN_ADD",
    data,
  };
};

export const planUpdateAction = (data) => {
  return {
    type: "PLAN_UPDATE",
    data,
  };
};

const plan = (state = initialState, action) => {
  switch (action.type) {
    case "PLAN_ADD":
      return {
        ...state,
        planData: [...state.planData, action.data],
      };
    case "PLAN_UPDATE":
      return {
        ...state,
        planData: {
          ...state.planData,
          title: action.data,
        },
      };
    default:
      return state;
  }
};

export default plan;
