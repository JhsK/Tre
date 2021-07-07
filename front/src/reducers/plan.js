export const initialState = {
  planData: [
    {
      title: "",
      start: "",
      end: "",
      dateValue: "",
    },
  ],
};

// export const initialState = {
//   planData: [{
//     title: {},
//     start:
//   }]
// }

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
