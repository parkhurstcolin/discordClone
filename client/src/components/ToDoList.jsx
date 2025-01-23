import PropTypes from "prop-types";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos }) => {
  return (
    <div>
      <ul>
        {toDos.length !== 0 ? (
          toDos.map((todo) => <ToDoItem toDo={todo} key={todo.id} />)
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array,
};

export default ToDoList;
