import PropTypes from "prop-types";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos }) => {
  console.log(toDos);
  return (
    <div>
      <ul>
        {toDos.map((todo) => {
          <ToDoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array,
};

export default ToDoList;
