import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import submitReducer from "./submitReducer";

export default combineReducers({
	todos: todoReducer,
	submit: submitReducer,
});
