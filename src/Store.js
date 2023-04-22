import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  composeWithDevTools,
  createwithDevTools,
} from "redux-devtools-extension";
import { stageReducer } from "./reducers/ActiveStageReducers";
import { persistStore, persistReducer } from "redux-persist";
import { scoreReducer } from "./reducers/ScoreReducers";

const stageInfoFromStorage = localStorage.getItem("stageInfo")
  ? JSON.parse(localStorage.getItem("stageInfo"))
  : "Stage1";

const reducer = combineReducers({
  currentStage: stageReducer,
  currentScore: scoreReducer,
});
const initialState = {
  currentStage: { stage: stageInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
