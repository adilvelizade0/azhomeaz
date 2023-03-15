import {
  GET_TOKEN_SUCCESS,
  GET_TOKEN_REQUEST,
} from "../../actions/types/token.types.js";

const initialState = {
  data: null,
  success: false,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return {
        ...state,
        success: false,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        success: true,
      };
    default:
      return state;
  }
};

export default tokenReducer;
