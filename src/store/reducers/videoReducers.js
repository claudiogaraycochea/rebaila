import videos from '../config/videos.json';

const initialState = {
  videos,
};

export default function videoConstructor(state = initialState, action) {
  switch (action.type) {
    /*case 'SET_DEMO':
      return {
        ...state,
        videos: action.videos
      };*/
    default:
      return state;
  }
}