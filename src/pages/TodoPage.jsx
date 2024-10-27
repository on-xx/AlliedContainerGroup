import React, { useEffect } from "react";
import ToDoItem from "../components/ToDoListApp/ToDoItem";
import TodoData from "../data/TodoListData";
import { useState } from "react";
import ToDoForm from "../components/ToDoListApp/ToDoForm";
import ScaleSelect from "../components/ToDoListApp/ScaleSelect";

const TodoPage = () => {
  const [scale, setScale] = useState(0);
  const [toDos, setToDos] = useState(TodoData);

  const handleDelete = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleSortingDesc = () => {
    const sortedToDos = [...toDos].sort((a, b) => b.scale - a.scale);
    setToDos(sortedToDos);
  };

  const handleSortingAsce = () => {
    const sortedToDos = [...toDos].sort((a, b) => a.scale - b.scale);
    setToDos(sortedToDos);
  };

  if (!toDos || toDos.length === 0) {
    return (
      <div id="todo-page">
        <div className="todo-page container">
          <ScaleSelect select={(scale) => setScale(scale)} />
          <ToDoForm scale={scale} setToDos={setToDos} />
          <h1>No ToDos Yet</h1>
        </div>
      </div>
    );
  }

  return (
    <div id="todo-page">
      <div className="todo-page container">
        <ScaleSelect select={(scale) => setScale(scale)} />
        <ToDoForm scale={scale} setToDos={setToDos} />

        <div className="sort-btn-container">
          <button onClick={handleSortingDesc} className="sort-btn">
            Most Important
          </button>

          <button onClick={handleSortingAsce} className="sort-btn">
            Least Important
          </button>
        </div>

        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id} toDo={toDo} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
