import axios from "axios";
import { GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS } from "../types/token.types";

const getTokenRequest = () => {
  return {
    type: GET_TOKEN_REQUEST,
  };
};

const getTokenSuccess = (token) => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload: token,
  };
};

const getRefreshTokenFromLocalStorage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token.refresh;
};

const setTokenToLocalStorage = (refresh, token) => {
  localStorage.setItem(
    "token",
    JSON.stringify({
      refresh: refresh,
      access: token,
    })
  );
};

const getToken = () => (dispatch) => {
  dispatch(getTokenRequest());
  const token = getRefreshTokenFromLocalStorage();
  axios
    .post(
      `${import.meta.env.VITE_BASE_URL}/api/token/refresh/`,
      {
        refresh: token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      setTokenToLocalStorage(token, res.data.access);
      dispatch(getTokenSuccess(res.data.access));
    });
};

export default getToken;
