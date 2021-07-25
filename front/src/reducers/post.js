import produce from "immer";

export const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  loadPostOneLoading: false,
  loadPostOneDone: false,
  loadPostOneError: null,
};

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const LOAD_POST_ONE_REQUEST = "LOAD_POST_ONE_REQUEST";
export const LOAD_POST_ONE_SUCCESS = "LOAD_POST_ONE_SUCCESS";
export const LOAD_POST_ONE_FAILURE = "LOAD_POST_ONE_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

const post = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        console.log(action.data);
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_POST_ONE_REQUEST:
        draft.loadPosOnetLoading = true;
        draft.loadPosOnetDone = false;
        draft.loadPosOnetError = null;
        break;
      case LOAD_POST_ONE_SUCCESS:
        draft.loadPostOneLoading = false;
        draft.loadPostOneDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        break;
      case LOAD_POST_ONE_FAILURE:
        draft.addPostOneLoading = false;
        draft.addPostOneError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        console.log(action.data);
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        draft.imagePaths = action.data;
        break;
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      default:
        break;
    }
  });
};

export default post;
