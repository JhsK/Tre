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

const updatePlan = (data) => ({});

const plan = (state = initialState, action) => {
  switch (action.type) {
    case "PLAN_ADD":
      return {
        ...state,
        planData: [...state.planData, action.data],
      };
    case "PLAN_UPDATE":
      //let data = state.planData.filter((a) => a.id === action.data.id);
      const planData = [...state.planData];
      const idx = state.planData.findIndex((a) => a.id === action.data.id);
      planData[idx] = action.data;
      console.log(planData);
      return {
        ...state,
        planData: [...planData],
      };
    default:
      return state;
  }
};

export default plan;
