import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Body from "./Body";
import Modal from "./Modal/Modal";
import ToDos from "./ToDos/ToDos";

import * as actions from "../actions/index";

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

export default connect(null, actions)(App);
