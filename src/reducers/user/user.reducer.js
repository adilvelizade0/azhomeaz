import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../../actions/types/user.types.js";

const initialState = {
  pending: false,
  user: null,
  error: null,
  success: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        pending: true,
        success: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload,
        success: true,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        success: false,
      };
    case UPDATE_USER_PENDING:
      return {
        ...state,
        pending: true,
        success: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload,
        success: true,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export default userReducer;
