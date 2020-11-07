import {combineReducers} from "redux";
import userReducer from './userReducer';
import statsReducer from "./statsReducer";

export default combineReducers({
    userReducer,
    statsReducer
})