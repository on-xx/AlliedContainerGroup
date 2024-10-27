const ToDoItem = ({ toDo, handleDelete }) => {
  return (
    <div className="todo-card">
      <div className="num-display">
        <div className="num-box">{toDo.scale}</div>
      </div>
      <div className="text-display">{toDo.text}</div>
      <button
        type="button"
        className="delete-btn"
        onClick={() => handleDelete(toDo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
