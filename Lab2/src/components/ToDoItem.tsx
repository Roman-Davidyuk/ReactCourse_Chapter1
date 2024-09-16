import React from "react";
import { ToDo } from "../interfaces/toDo";

interface ToDoItemProps {
  todo: ToDo;
  onToggleComplete: (id: number) => void;
  onDeleteToDo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, onToggleComplete, onDeleteToDo }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    onDeleteToDo(todo.id);
  };


  return (
    <li className={`todo-item ${todo.isComplete ? "completed" : ""}`}>
      <span className="todo-title">{todo.title}</span>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleCheckboxChange}
        className="todo-checkbox"
      />
       <button onClick={handleDeleteClick} className="todo-delete">
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
