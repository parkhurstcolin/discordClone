import { FETCH_TO_DO } from "../actions/types";

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_TO_DO:
			return action.payload;
		default:
			return state;
	}
}
