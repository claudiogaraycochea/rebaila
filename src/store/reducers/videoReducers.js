const initialState = {
    auth: {},
  };
  
  export default function videoConstructor(state = initialState, action) {
    switch (action.type) {
      case 'SET_FIRSTNAME':
        return {
          ...state,
          firstname: action.firstname
        };
      default:
        return state;
    }
  }