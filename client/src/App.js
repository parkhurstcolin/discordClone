import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

const App = () => {
	const [addToDo, setAddToDo] = useState(false);
	function addToDoHandler() {
		setAddToDo(!addToDo);
	}
	return (
		<div className="container mx-auto px-32 text-center">
			<Header addToDo={addToDoHandler} />
			{!addToDo && <h1>Button Works</h1>}
			<Body />
		</div>
	);
};

export default App;
