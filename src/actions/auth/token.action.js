import axios from "axios";

const GET_TOKEN_REQUEST = "GET_TOKEN_REQUEST";

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

const refreshToken = () => {
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
    });
};

const getToken = () => (dispatch) => {
  dispatch({ type: GET_TOKEN_REQUEST });
  refreshToken();
};

export { GET_TOKEN_REQUEST, getToken };
