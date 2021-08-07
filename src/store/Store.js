import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";

const logger = store => next => action => {
  // console.log('next:', action);
  let result = next(action);
  // console.log(result);
  return result
}

export default function getStore() {
  const store = createStore(
    reducers,
    undefined,
    applyMiddleware(logger,thunk)
  );

  return store;
}