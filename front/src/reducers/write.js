export const initialState = {
  writeData: [
    {
      title: "",
      start: "",
      end: "",
      dateValue: "",
    },
  ],
};

const POST_ADD = "POST_ADD";

export const postAddAction = (data) => {
  return {
    type: POST_ADD,
    data,
  };
};

const write = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD:
      return {
        ...state,
        writeData: [...state.writeData, action.data],
      };
    default:
      return state;
  }
};

export default write;
