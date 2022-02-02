import reducer from "./reducers/index";
import logger from "redux-logger";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(logger),
  // other store enhancers if any
));

 
export default store;