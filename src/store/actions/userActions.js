export const setInterest = (data) => async dispatch => {
  dispatch({
    type: 'SET_INTEREST',
    payload: data
  })
}

export const setUserData = (data) => async dispatch => {
  dispatch({
    type: 'SET_USER_DATA',
    payload: data
  })
}
