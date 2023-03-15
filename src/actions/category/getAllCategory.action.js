import axios from "axios";

import {
  GET_All_CATEGORY_PENDING,
  GET_All_CATEGORY_SUCCESS,
  GET_All_CATEGORY_ERROR,
} from "../types/category.types.js";

const getAllCategory = () => async (dispatch) => {
  dispatch({
    type: GET_All_CATEGORY_PENDING,
  });
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/category/list/`
    );
    dispatch({
      type: GET_All_CATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_All_CATEGORY_ERROR,
      payload: err,
    });
  }
};

export default getAllCategory;
