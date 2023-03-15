import axios from "axios";
import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "../types/user.types";

const getAccessTokenFromLocalStorage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token.access;
};

const getUser = (id) => (dispatch) => {
  dispatch({ type: GET_USER_PENDING });
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/auth/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
      },
    })
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_ERROR, payload: err });
    });
};

export default getUser;
