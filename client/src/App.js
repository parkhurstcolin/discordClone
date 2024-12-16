import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ToDos from "./Components/ToDos/ToDos";

const App = () => {
	const [addToDo, setAddToDo] = useState(false);
	function addToDoHandler() {
		setAddToDo(!addToDo);
	}
	return (
		<div className="container mx-auto px-32 text-center">
			{addToDo && <h1>Button Works</h1>}
			<>
				<Header addToDo={addToDoHandler} />
				<Body />
			</>
		</div>
	);
};

export default App;
