import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import count, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";
const rootReducer = combineReducers({ count, sample, loading });

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}
export default rootReducer;
