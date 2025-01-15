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

  return (
    <div className="container w-3/5">
      {showModal ? (
        <Modal onClose={() => setShowModal(!showModal)}>
          <SubmitTodo newToDo={newTodo} setNewTodo={setNewTodo} />
        </Modal>
      ) : (
        <></>
      )}
      <Header
        onNewPost={() => setShowModal(!showModal)}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <div></div>
    </div>
  );
};

export default App;
