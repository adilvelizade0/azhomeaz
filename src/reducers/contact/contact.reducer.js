import {
  POST_CONTACT_PENDING,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_ERROR,
} from "../../actions/types/contact.types.js";

const initialState = {
  pending: false,
  success: false,
  error: false,
  data: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CONTACT_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
      };
    case POST_CONTACT_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        data: action.payload,
      };
    case POST_CONTACT_ERROR:
      return {
        ...state,
        pending: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
