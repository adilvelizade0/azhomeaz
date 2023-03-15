import axios from "axios";
import {
  CREATE_ANNOUNCEMENT_PENDING,
  CREATE_ANNOUNCEMENT_SUCCESS,
  CREATE_ANNOUNCEMENT_ERROR,
} from "../types/announcement.types";
import data from "bootstrap/js/src/dom/data.js";

const getAccessTokenFromLocalStorage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token.access;
};

const createAnnouncement = (data) => (dispatch) => {
  dispatch({ type: CREATE_ANNOUNCEMENT_PENDING });
  axios
    .post(
      `${import.meta.env.VITE_BASE_URL}/announcement/list/`,
      data,

      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
        },
      }
    )
    .then((res) => {
      dispatch({ type: CREATE_ANNOUNCEMENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: CREATE_ANNOUNCEMENT_ERROR, payload: err });
    });
};

export default createAnnouncement;
