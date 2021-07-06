export const initialState = {
  planData: {},
};

export const planAddAction = (data) => {
  return {
    type: "PLAN_ADD",
    data,
  };
};

const plan = (state = initialState, action) => {
  switch (action.type) {
    case "PLAN_ADD":
      return {
        ...state,
        planData: action.data,
      };
    default:
      return state;
  }
};

export default plan;
