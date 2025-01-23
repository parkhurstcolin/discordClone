import PropTypes from "prop-types";
import { useState } from "react";

const SubmitTodo = ({ onAddToDo }) => {
  const [toDo, setToDo] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newToDo = { toDo, description, id: Date.now() };

    onAddToDo(newToDo);
    setToDo("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New To Do: </label>
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="New To Do"
        ></input>
      </div>
      <div>
        <label>Description: </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Please describe the job"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

SubmitTodo.propTypes = {
  onAddToDo: PropTypes.func,
};

export default SubmitTodo;
