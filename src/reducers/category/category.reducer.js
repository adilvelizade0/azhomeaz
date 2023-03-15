import {
  GET_All_CATEGORY_PENDING,
  GET_All_CATEGORY_SUCCESS,
  GET_All_CATEGORY_ERROR,
} from "../../actions/types/category.types.js";

const initialState = {
  categories: {
    data: [],
    loading: false,
    error: null,
    success: null,
  },
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All_CATEGORY_PENDING:
      return {
        ...state,
        categories: {
          ...state.categories,
          loading: true,
          success: null,
        },
      };
    case GET_All_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: {
          ...state.categories,
          data: action.payload,
          loading: false,
          success: true,
        },
      };
    case GET_All_CATEGORY_ERROR:
      return {
        ...state,
        categories: {
          ...state.categories,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default categoryReducer;
