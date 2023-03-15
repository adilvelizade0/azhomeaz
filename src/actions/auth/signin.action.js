import axios from "axios";
import {
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from "../types/signin.types.js";

const signin = (user) => (dispatch) => {
  dispatch({ type: SIGNIN_PENDING });
  axios
    .post(`${import.meta.env.VITE_BASE_URL}/auth/login/`, user)
    .then((res) => {
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SIGNIN_ERROR, payload: err.response.data });
    });
};

export default signin;
