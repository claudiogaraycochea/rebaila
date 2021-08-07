import { combineReducers } from "redux";
import userConstructor from './userReducers';
import videoConstructor from './videoReducers';
import systemConstructor from './systemReducers';

export default combineReducers({
    userConstructor: userConstructor,
    videoConstructor: videoConstructor,
    systemConstructor: systemConstructor,
  }
);
