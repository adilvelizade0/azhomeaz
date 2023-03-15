import {
  POST_SUBSCRIBE_PENDING,
  POST_SUBSCRIBE_SUCCESS,
  POST_SUBSCRIBE_ERROR,
} from "../../actions/types/subscribe.types.js";

const initialState = {
  pending: false,
  success: false,
  error: null,
  data: null,
};

const subscriberReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SUBSCRIBE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case POST_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        message: action.payload.message,
      };
    case POST_SUBSCRIBE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default subscriberReducer;
