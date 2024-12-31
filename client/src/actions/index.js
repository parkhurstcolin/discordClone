import axios from "axios";
import { FETCH_TO_DO, SUBMIT_TO_DO } from "./types";

export const fetchToDo = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/todo");

  dispatch({ type: FETCH_TO_DO, payload: res.data });
};

export const submitToDo = (values) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/api/todo", values);
  console.log(res);

  dispatch({ type: SUBMIT_TO_DO, payload: res.data });
};
