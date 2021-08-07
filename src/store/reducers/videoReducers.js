const initialState = {
    auth: {},
    user: {
      user_vines: []
    },
    firstname: 'Nombre1',
    users: [
      {uid: 1 ,firstname: 'Tito', email: 'tito@gmail.com'},
      {uid: 2 ,firstname: 'Juan', email: 'juan@gmail.com'}
    ],
    error_message: {type:''},
    sign_up_success: false,
    user_notifications: [],
  };
  
  export default function videoConstructor(state = initialState, action) {
    switch (action.type) {
      case 'SET_FIRSTNAME':
        return {
          ...state,
          firstname: action.firstname
        };
  
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          auth: action.auth,
          user: action.user
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          error_message: action.error_message,
        };
  
      case 'SIGN_UP_SUCCESS':
        return {
          ...state,
          sign_up_success: action.sign_up_success,
          error_message: action.error_message
        };
      case 'SIGN_UP_ERROR':
        return {
          ...state,
          error_message: action.error_message
        };
  
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          auth: action.auth,
          error_message: {}
        };
      case 'LOGOUT_ERROR':
        return {
          ...state,
          error_message: action.error_message
        };
  
      case 'GET_USERS_SUCCESS':
        return {
          ...state,
          users: action.users,
          error_message: {}
        };
  
      case 'GET_USER_SUCCESS':
        return {
          ...state,
          user: action.user
        }
  
      case 'GET_USER_NOTIFICATIONS_SUCCESS':
        return {
          ...state,
          user_notifications: action.user_notifications,
          error_message: {}
        };
  
      case 'SET_USER_SUCCESS':
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  }