import axios from "axios";
import { API } from "../config/constants";

export const createCompany = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API}/company/create`, data);
    dispatch({
      type: 'CREATE_COMPANY_OWN_SUCCESS',
      company_own: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: 'CREATE_COMPANY_OWN_ERROR',
      error_message: error
    });
  }
};

export const updateCompany = (company_id, data) => async (dispatch) => {
  try {
    const res = await axios.patch(`${API}/company/${company_id}/edit`, data);
    dispatch({
      type: 'UPDATE_COMPANY_OWN_SUCCESS',
      company_own: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: 'UPDATE_COMPANY_OWN_ERROR',
      error_message: error,
    });
  }
};

export const getCompany = (company_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/company/${company_id}`);
    dispatch({
      type: 'GET_COMPANY_SUCCESS',
      company: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: 'GET_COMPANY_ERROR',
      errorMessage: error,
    });
  }
};

export const searchCompany = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API}/companies/search/name`, data);
    dispatch({
      type: 'SEARCH_COMPANY_SUCCESS',
      companies: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: 'SEARCH_COMPANY_ERROR',
      error_message: error,
    });
  }
};

export const getCompanies = (data) => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/companies`);
    console.log('res:', res);
    dispatch({
      type: 'GET_COMPANIES_SUCCESS',
      companies: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: 'GET_COMPANIES_ERROR',
      _: error,
    });
  }
};

export const getCompanyOwn = (company_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/company/${company_id}`);
    dispatch({
      type: 'GET_COMPANY_OWN_SUCCESS',
      company_own: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: 'GET_COMPANY_OWN_ERROR',
      error_message: error,
    });
  }
};

export const getCommentaryCompany = (company_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/company/${company_id}/comments`);
    dispatch({
      type: 'GET_COMMENTARIES_COMPANY_SUCCESS',
      company_commentaries: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: 'GET_COMMENTARIES_COMPANY_ERROR',
      error_message: error,
    });
  }
};
