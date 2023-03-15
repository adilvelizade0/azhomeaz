import axios from "axios";
import {
  POST_SUBSCRIBE_PENDING,
  POST_SUBSCRIBE_SUCCESS,
  POST_SUBSCRIBE_ERROR,
} from "../types/subscribe.types.js";

const postSubscribe = (email) => (dispatch) => {
  dispatch({ type: POST_SUBSCRIBE_PENDING });
  axios
    .post(
      `${import.meta.env.VITE_BASE_URL}/subscriber/list`,
      JSON.stringify({
        email: email,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({ type: POST_SUBSCRIBE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_SUBSCRIBE_ERROR, payload: err });
    });
};

export default postSubscribe;
