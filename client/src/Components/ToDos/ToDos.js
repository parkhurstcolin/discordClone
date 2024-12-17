import React from "react";

const ToDos = () => {
	return (
		<div className="">
			<div className="flex">
				<div className="">
					<h1 className="text-3xl my-1 p-1">New To Do:</h1>
				</div>
			</div>
			<div>
				<div className="m-1">
					<label className="ml-3">* Name:</label>
					<input className="m-1 border-solid border"></input>
				</div>
				<div className="m-1">
					<label className="ml-3">* To Do:</label>
					<input className="m-1 border-solid border"></input>
				</div>
			</div>
			<button className="b-0 m-1 p-2 bg-green-500 float-right rounded">
				Submit
			</button>
		</div>
	);
};

export default ToDos;
