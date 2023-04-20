import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  composeWithDevTools,
  createwithDevTools,
} from "redux-devtools-extension";
import { stageReducer } from "./reducers/ActiveStageReducers";

const reducer = combineReducers({ currentStage: stageReducer });
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
