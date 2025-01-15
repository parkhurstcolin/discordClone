import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container ">
      {showModal ? (
        <Modal onClose={() => setShowModal(!showModal)}></Modal>
      ) : (
        <></>
      )}
      <Header onClose={() => setShowModal(!showModal)} />
      <div></div>
    </div>
  );
};

export default App;
