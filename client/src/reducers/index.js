import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import submitReducer from "./submitToDo";

export default combineReducers({
  todos: todoReducer,
  submit: submitReducer,
});
