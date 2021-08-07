import axios from 'axios';
import { API } from '../config/constants';

export const setInterest = (data) => async dispatch => {
  console.log('USERACTIONS: setInterest: data', data);
  dispatch({
    type: 'SET_INTEREST',
    payload: data
  })
}

export const setUserData = (data) => async dispatch => {
  console.log('USERACTIONS: setUserData: data', data);
  dispatch({
    type: 'SET_USER_DATA',
    payload: data
  })
}

export const logout = () => async dispatch => { 
  dispatch({
    type: 'LOGOUT_SUCCESS',
    auth: {},
  })
}

export const signUp = (data) => async dispatch => { 
  try {
    const res = await axios.post(`${API}/user/create`, data)
    if(res.data.Error) {
      dispatch({
        type: 'SIGN_UP_SUCCESS',
        sign_up_success: false,
        error_message: {
          type: 'SIGN_UP_ERROR',
          message: 'Error'
        }
      })
    }
    else {
      dispatch({
        type: 'SIGN_UP_SUCCESS',
        sign_up_success: true,
      })      
    }
  }
  catch(error) {
    dispatch({
      type: 'SIGN_UP_ERROR',
      error_message: {
        type: 'SIGN_UP_ERROR',
        message: 'Invalid data.'
      }
    })
  }
}

export const getNotifications = (company_id) => async dispatch => { 
  try {
    const res = await axios.post(`${API}/company/${company_id}/notifications`)
    dispatch({
      type: 'GET_NOTIFICATION_SUCCESS',
      notifications: res.data.result,
    })
  }
  catch(error) {
    dispatch({
      type: 'GET_NOTIFICATION_ERROR',
      error_message: {
        type: 'GET_NOTIFICATION_ERROR',
        message: 'Invalid data.'
      }
    })
  }
}

export const getUser = (user_id) => async dispatch => {
  try {
    const res = await axios.get(`${API}/user/${user_id}`)
    dispatch({
      type: 'GET_USER_SUCCESS',
      user: res.data.result,
    })
  }
  catch(error) {
    dispatch({
      type: 'GET_USER_ERROR',
      error_message: {
        type: 'GET_USER_ERROR',
        message: 'Invalid data.'
      }
    })
  }
}

export const setUser = (user_id, data) => async dispatch => {
  try {
    const res = await axios.patch(`${API}/user/${user_id}/edit`, data);
    dispatch({
      type: 'SET_USER_SUCCESS',
      user: res.data.result,
    })
  }
  catch(error) {
    dispatch({
      type: 'SET_USER_ERROR',
      error_message: {
        type: 'SET_USER_ERROR',
        message: 'Invalid data.'
      }
    })
  }
}

export const getUserNotifications = (user_id) => async dispatch => {
  try {
    const notification_type = 'user';
    const entity_id = user_id;
    const res = await axios.get(`${API}/notifications/${notification_type}/notifications/list/${entity_id}`);
    dispatch({
      type: 'GET_USER_NOTIFICATIONS_SUCCESS',
      user_notifications: res.data.result,
    })
  }
  catch(error) {
    dispatch({
      type: 'GET_USER_NOTIFICATION_ERROR',
      error_message: {
        type: 'GET_USER_NOTIFICATION_ERROR',
        message: 'Invalid data.'
      }
    })
  }
}