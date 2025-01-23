import PropTypes from "prop-types";
const ToDoItem = ({ toDo }) => {
  return (
    <li>
      <div>
        <button>X</button>

        <p>{toDo.toDo}</p>
        <p>{toDo.description}</p>
      </div>
    </li>
  );
};

ToDoItem.propTypes = {
  toDo: PropTypes.object,
};

export default ToDoItem;
