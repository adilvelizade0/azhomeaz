import {
  GET_ALL_CITIES_ERROR,
  GET_ALL_CITIES_SUCCESS,
  GET_ALL_CITIES_PENDING,
  GET_CITY_PENDING,
  GET_CITY_SUCCESS,
  GET_CITY_ERROR,
} from "../../actions/types/city.types.js";

const initialState = {
  cities: {
    data: [],
    error: null,
    pending: false,
    success: null,
  },
  city: {
    data: null,
    error: null,
    pending: false,
    success: null,
  },
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES_SUCCESS:
      return {
        ...state,
        cities: {
          ...state.cities,
          data: action.payload,
          pending: false,
          success: true,
        },
      };
    case GET_ALL_CITIES_ERROR:
      return {
        ...state,
        cities: {
          ...state.cities,
          error: action.payload,
          pending: false,
          success: false,
        },
      };
    case GET_ALL_CITIES_PENDING:
      return {
        ...state,
        cities: {
          ...state.cities,
          pending: true,
        },
      };
    case GET_CITY_PENDING:
      return {
        ...state,
        city: {
          ...state.city,
          pending: true,
          success: null,
        },
      };
    case GET_CITY_SUCCESS:
      return {
        ...state,
        city: {
          ...state.city,
          data: action.payload,
          pending: false,
          success: true,
        },
      };
    case GET_CITY_ERROR:
      return {
        ...state,
        city: {
          ...state.city,
          error: action.payload,
          pending: false,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default cityReducer;
