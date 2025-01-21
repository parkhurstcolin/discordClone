import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/modal/Modal";
import SubmitTodo from "./components/SubmitTodo";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [toDos, setToDos] = useState([]);

  function modalHandler() {
    setShowModal(!showModal);
  }

  function addToDoHandler(todo) {
    setToDos((toDos) => [...toDos, todo]);
  }

  return (
    <div className="container w-3/5">
      {showModal ? (
        <Modal onClose={() => setShowModal(!showModal)}>
          <SubmitTodo onAddToDo={addToDoHandler} />
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
