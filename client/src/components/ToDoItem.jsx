const ToDoItem = (todo) => {
  return (
    <li>
      <p value={todo.toDo}></p>
      <p value={todo.description}></p>
    </li>
  );
};

export default ToDoItem;
