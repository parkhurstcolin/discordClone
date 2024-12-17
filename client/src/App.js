import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Modal from "./Components/Modal/Modal";
import ToDos from "./Components/ToDos/ToDos";

const App = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	function modalHandler() {
		setModalOpen(!isModalOpen);
	}
	function submitHandler({ name, label }) {}
	return (
		<>
			{isModalOpen && (
				<Modal onClose={modalHandler}>
					<ToDos onSubmit={submitHandler} />
				</Modal>
			)}
			<div className="container mx-auto px-32 text-center">
				<>
					<Header addToDo={modalHandler} />
					<Body />
				</>
			</div>
		</>
	);
};

export default App;
