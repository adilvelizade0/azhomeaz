import axios from "axios";
import {
  GET_ALL_CITIES_PENDING,
  GET_ALL_CITIES_SUCCESS,
  GET_ALL_CITIES_ERROR,
} from "../types/city.types";

const getAllCities = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CITIES_PENDING });
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/city/list/`
    );
    dispatch({ type: GET_ALL_CITIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_CITIES_ERROR, payload: error });
  }
};

export default getAllCities;
