import { useState } from "react";

const ToDoForm = ({ scale, setToDos }) => {
  const [text, setText] = useState("");
  const handleTextInput = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      const newToDo = {
        id: Date.now(),
        text,
        scale,
      };

      setToDos((prevToDos) => [...prevToDos, newToDo]);
      setText("");
    }
  };

  return (
    <div id="todo-form">
      <form className="todo-form container" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Write a Todo"
          value={text}
          onChange={handleTextInput}
          className="todo-form-input"
        />
        <button type="submit" className="todo-form-btn" disabled={!text.trim()}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
