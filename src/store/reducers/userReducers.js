const initialState = {
  interest: {
    experience: '',
    target: '',
    gender: '',
    time_by_session: ''
  },
  user: {
    fullname: '',
    country: '',
    date_of_birth: ''
  }
};

export default function userConstructor(state = initialState, action) {
  switch (action.type) {
    case 'SET_INTEREST':
      state.interest[action.payload.type] = action.payload.value;
      return {
        ...state
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
  