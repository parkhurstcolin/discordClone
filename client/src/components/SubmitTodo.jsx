import PropTypes from "prop-types";

const SubmitTodo = ({ todoHandler }) => {
  return (
    <form onSubmit={todoHandler}>
      <div>
        <label>New To Do: </label>
        <input id="todo" type="text"></input>
      </div>
      <div>
        <label>Description: </label>
        <input id="description" type="text"></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

SubmitTodo.propTypes = {
  todoHandler: PropTypes.todoHandler,
};

export default SubmitTodo;
