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

export const rootReducer = combineReducers({
  userConstructor: userConstructor,
  videoConstructor: videoConstructor,
  systemConstructor: systemConstructor
});

export type RootState = ReturnType<typeof rootReducer>