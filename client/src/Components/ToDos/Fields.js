import React from "react";

const Fields = ({ input, label, name }) => {
	return (
		<div>
			<label className="mr-2 bold">{label}</label>
			<input
				{...input}
				className="border min-w-full bg-gray-50"
				name={name}
			></input>
		</div>
	);
};

export default Fields;
