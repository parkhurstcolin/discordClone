const ToDoItem = ({ toDo, description }) => {
  return (
    <li>
      <p>{toDo}</p>
      <p>{description}</p>
    </li>
  );
};

export default ToDoItem;
