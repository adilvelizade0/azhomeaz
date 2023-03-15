import axios from "axios";

import {
  GET_CITY_PENDING,
  GET_CITY_SUCCESS,
  GET_CITY_ERROR,
} from "../types/city.types.js";

const getCity = (id) => async (dispatch) => {
  dispatch({ type: GET_CITY_PENDING });
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/city/detail/${id}`
    );
    dispatch({ type: GET_CITY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CITY_ERROR, payload: error });
  }
};

export default getCity;
