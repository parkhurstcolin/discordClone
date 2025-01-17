import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/modal/Modal";
import SubmitTodo from "./components/SubmitTodo";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState({
    todo: "",
    description: "",
  });

  function modalHandler() {
    setShowModal(!showModal);
  }

  function todoHandler() {
    setNewTodo({
      todo: event.currentTarget.SubmitTodo.todo,
      description: event.currentTarget.SubmitTodo.description,
    });
    console.log(newTodo);
  }

  return (
    <div className="container w-3/5">
      {showModal ? (
        <Modal onClose={() => setShowModal(!showModal)}>
          <SubmitTodo todoHandler={todoHandler} />
        </Modal>
      ) : (
        <></>
      )}
      <Header onNewPost={modalHandler} />
      <div></div>
    </div>
  );
};

export default App;
