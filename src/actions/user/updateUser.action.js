import axios from "axios";
import {
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "../types/user.types";

const getAccessTokenFromLocalStorage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token.access;
};

const updateUser = (id, data) => (dispatch) => {
  dispatch({ type: UPDATE_USER_PENDING });
  axios
    .put(`${import.meta.env.VITE_BASE_URL}/auth/users/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
      },
    })
    .then((res) => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_USER_ERROR, payload: err });
    });
};

export default updateUser;
