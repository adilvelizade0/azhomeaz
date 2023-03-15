import axios from "axios";

import {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../types/signup.types.js";

const signup = (user) => (dispatch) => {
  dispatch({ type: SIGNUP_PENDING });
  console.log(user);
  axios
    .post(
      `${import.meta.env.VITE_BASE_URL}/auth/registration/`,
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data });
    });
};

export default signup;
