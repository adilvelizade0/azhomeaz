import axios from "axios";
import {
  POST_CONTACT_PENDING,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_ERROR,
} from "../types/contact.types.js";

const postContact = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_CONTACT_PENDING });
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/message/list/`,
      JSON.stringify({
        name: data.name,
        surname: data.surname,
        email: data.email,
        subject: data.subject,
        description: data.description,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: POST_CONTACT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: POST_CONTACT_ERROR, payload: error.response.data });
  }
};

export default postContact;
