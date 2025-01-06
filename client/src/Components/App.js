import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Modal from "./Modal/Modal";
import SubmitToDos from "./ToDos/SubmitToDos";
import ToDos from "./ToDos/ToDos";
import * as actions from "../actions/index";

const App = ({ submitToDo }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  function modalHandler() {
    setModalOpen(!isModalOpen);
  }

  return (
    <>
      {isModalOpen && (
        <Modal onClose={modalHandler}>
          <SubmitToDos submitToDo={submitToDo} />
        </Modal>
      )}
      <div className="container mx-auto px-32 text-center">
        <>
          <Header addToDo={modalHandler} />
          <ToDos />
        </>
      </div>
    </>
  );
};

export default connect(null, actions)(App);
