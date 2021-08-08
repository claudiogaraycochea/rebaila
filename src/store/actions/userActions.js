import axios from "axios";
import { API } from "../config/constants";

export const setInterest = (data) => async (dispatch) => {
  console.log("USERACTIONS: setInterest: data", data);
  dispatch({
    type: "SET_INTEREST",
    payload: data,
  });
};

export const setUserData = (data) => async (dispatch) => {
  dispatch({
    type: "SET_USER_DATA",
    payload: data,
  });
};
