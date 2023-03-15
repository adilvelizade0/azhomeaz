import axios from "axios";
import {
  GET_ALL_ANNOUNCEMENTS_PENDING,
  GET_ALL_ANNOUNCEMENTS_SUCCESS,
  GET_ALL_ANNOUNCEMENTS_ERROR,
} from "../types/announcement.types";

const getAllAnnouncements = () => (dispatch) => {
  dispatch({ type: GET_ALL_ANNOUNCEMENTS_PENDING });
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/announcement/list/`)
    .then((res) => {
      dispatch({ type: GET_ALL_ANNOUNCEMENTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_ANNOUNCEMENTS_ERROR, payload: err });
    });
};

export default getAllAnnouncements;
