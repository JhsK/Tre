import produce from "immer";

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  nickChangeLoading: false,
  nickChangeDone: false,
  nickChangeError: null,
  emailChangeLoading: false,
  emailChangeDone: false,
  emailChangeError: null,
  user: null,
  Posts: [{ id: 1 }],
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SING_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SING_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SING_UP_FAILURE";

export const NICK_CHANGE_REQUEST = "NICK_CHANGE_REQUEST";
export const NICK_CHANGE_SUCCESS = "NICK_CHANGE_SUCCESS";
export const NICK_CHANGE_FAILURE = "NICK_CHANGE_FAILURE";

export const EMAIL_CHANGE_REQUEST = "EMAIL_CHANGE_REQUEST";
export const EMAIL_CHANGE_SUCCESS = "EMAIL_CHANGE_SUCCESS";
export const EMAIL_CHANGE_FAILURE = "EMAIL_CHANGE_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

const dummyUser = (data) => ({
  ...data,
  nickname: "JhsK",
  email: "qwe6293@nate.com",
  id: 1,
  Posts: [{ id: 1 }],
});

const user = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.user = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.user = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.data;
        break;
      case NICK_CHANGE_REQUEST:
        draft.nickChangeLoading = true;
        draft.nickChangeDone = false;
        draft.nickChangeError = null;
        break;
      case NICK_CHANGE_SUCCESS:
        draft.user.nickname = action.data;
        draft.nickChangeLoading = false;
        draft.nickChangeDone = true;
        break;
      case NICK_CHANGE_FAILURE:
        draft.nickChangeLoading = false;
        draft.nickChangeError = action.data;
        break;
      case EMAIL_CHANGE_REQUEST:
        draft.emailChangeLoading = true;
        draft.emailChangeDone = false;
        draft.emailChangeError = null;
        break;
      case EMAIL_CHANGE_SUCCESS:
        draft.user.email = action.data;
        draft.emailChangeLoading = false;
        draft.emailChangeDone = true;
        break;
      case EMAIL_CHANGE_FAILURE:
        draft.emailChangeLoading = false;
        draft.emailChangeError = action.data;
        break;
      case ADD_POST_TO_ME:
        draft.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.Posts = draft.Posts.filter((v) => v.id !== action.data);
        break;
      default:
        break;
    }
  });
};

export default user;
