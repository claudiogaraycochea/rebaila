const initialState = {
  interest: {
    experience: 'Principiante',
    target: 'Aprender Basicos',
    gender: 'Hiphop',
    tyme_by_session: '15 minutos'
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
      // console.log('USERREDUCERS: state:', state );
      return {
        ...state
      };

    case 'SET_USER_DATA':
      // console.log('SET_USER_DATA: ',action);
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}
  