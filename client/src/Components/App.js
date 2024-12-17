import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Body from "./Body";
import Modal from "./Modal/Modal";
import ToDos from "./ToDos/ToDos";

import * as actions from "../actions/index";

const App = ({ submitToDo, fetchToDo }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	function modalHandler() {
		setModalOpen(!isModalOpen);
	}

	return (
		<>
			{isModalOpen && (
				<Modal onClose={modalHandler}>
					<ToDos onSubmit={() => submitToDo(this.todo, this.username)} />
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
