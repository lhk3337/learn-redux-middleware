import { combineReducers } from "redux";
import count from "./counter";
import sample from "./sample";
import loading from "./loading";
const rootReducer = combineReducers({ count, sample, loading });

export default rootReducer;
