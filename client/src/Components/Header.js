import React from "react";
import Icon from "../logo512.png";

const Header = ({ addToDo }) => {
	return (
		<div className="flex ">
			<div className="flex-2 bg-red-500">
				<img src={Icon} width={56} height={56} />
			</div>
			<h1 className="flex-1 m-0 p-2 text-3xl font-bold bg-red-500 text-white">
				To Do List
			</h1>
			<button className="flex-2 m-0 px-4 bg-green-500" onClick={addToDo}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 4.5v15m7.5-7.5h-15"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Header;
