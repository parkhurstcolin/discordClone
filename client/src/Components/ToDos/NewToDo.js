import _ from "lodash";
import React from "react";
import toDoFields from "./toDoFields";

const NewToDo = ({ formValues }) => {
	const emptyToDo = _.map(toDoFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});
};

export default NewToDo;
