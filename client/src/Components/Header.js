import React from "react";
import PlusIcon from "../icons/PlusIcon";
import Icon from "../icons/logo512.png";

const Header = ({ addToDo }) => {
	return (
		<div className="flex ">
			<div className="flex-2 bg-red-500">
				<a href="http://localhost:3000">
					<img src={Icon} width={56} height={56} />
				</a>
			</div>
			<h1 className="flex-1 m-0 p-2 text-3xl font-bold bg-red-500 text-white">
				To Do List
			</h1>
			<button className="flex-2 m-0 px-4 bg-green-500" onClick={addToDo}>
				<PlusIcon />
			</button>
		</div>
	);
};

export default Header;
