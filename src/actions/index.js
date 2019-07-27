import {
  CRYPTO_LIST_START,
  CRYPTO_LIST_SUCCESS,
  CRYPTO_LIST_FAILURE
} from "./actionTypes";
import { dataApi } from "../api/index";

export const fetchData = () => async dispatch => {
  dispatch({ type: CRYPTO_LIST_START });

  try {
    const data = await dataApi();
    dispatch({
      type: CRYPTO_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CRYPTO_LIST_FAILURE,
      payload: error,
      error: true
    });
  }
};
