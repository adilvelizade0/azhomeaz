import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../../actions/types/signup.types.js";

import {
  GET_OTP_PENDING,
  GET_OTP_SUCCESS,
  GET_OTP_ERROR,
} from "../../actions/types/otp.types.js";

import {
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from "../../actions/types/signin.types.js";

import { GET_TOKEN_REQUEST } from "../../actions/auth/token.action.js";

const initialState = {
  register: {
    pending: false,
    error: null,
    success: false,
    phoneNumber: null,
  },
  otp: {
    pending: false,
    error: null,
    success: false,
    code: null,
  },
  login: {
    pending: false,
    error: null,
    success: false,
    token: null,
  },
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_PENDING:
      return {
        ...state,
        register: {
          ...state.register,
          pending: true,
          success: false,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          pending: false,
          success: true,
          phoneNumber: action.payload,
          error: null,
        },
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        register: {
          ...state.register,
          pending: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};
const otpReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTP_PENDING:
      return {
        ...state,
        otp: {
          ...state.otp,
          pending: true,
          success: false,
        },
      };
    case GET_OTP_SUCCESS:
      return {
        ...state,
        otp: {
          ...state.otp,
          pending: false,
          success: true,
          code: action.payload,
          error: null,
        },
      };
    case GET_OTP_ERROR:
      return {
        ...state,
        otp: {
          ...state.otp,
          pending: false,
          error: action.payload.response.data,
          success: false,
        },
      };
    default:
      return state;
  }
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_PENDING:
      return {
        ...state,
        login: {
          ...state.login,
          pending: true,
          success: false,
        },
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          pending: false,
          success: true,
          token: action.payload,
          error: null,
        },
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          pending: false,
          error: action.payload,
          success: false,
        },
      };
    case GET_TOKEN_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { signupReducer, otpReducer, loginReducer };
