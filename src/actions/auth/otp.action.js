import axios from "axios";

import {
  GET_OTP_PENDING,
  GET_OTP_SUCCESS,
  GET_OTP_ERROR,
} from "../types/otp.types.js";

const getOtp = (data) => (dispatch) => {
  dispatch({
    type: GET_OTP_PENDING,
  });
  axios
    .post(
      `${import.meta.env.VITE_BASE_URL}/auth/get-otp/`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({
        type: GET_OTP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_OTP_ERROR,
        payload: err,
      });
    });
};

export default getOtp;
