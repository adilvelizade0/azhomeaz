import axios from "axios";
import {
  GET_ANNOUNCEMENT_ERROR,
  GET_ANNOUNCEMENT_PENDING,
  GET_ANNOUNCEMENT_SUCCESS,
} from "../types/announcement.types.js";

const getAnnouncement = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ANNOUNCEMENT_PENDING });
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/announcement/detail/${id}/`
    );
    dispatch({ type: GET_ANNOUNCEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ANNOUNCEMENT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getAnnouncement;
