import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(true);

  function modalContent() {
    return (
      <>
        <Header setShowModal={() => setShowModal(!showModal)} />
        <div></div>
      </>
    );
  }

  return (
    <div className="container ">
      {showModal ? (
        <Modal onClick={() => setShowModal(!showModal)}>{modalContent()}</Modal>
      ) : (
        <>{modalContent()}</>
      )}
    </div>
  );
};

export default App;
