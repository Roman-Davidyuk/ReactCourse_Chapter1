import React from "react";
import { ToDo } from "../interfaces/toDo";

interface ToDoItemProps {
  todo: ToDo;
  onToggleComplete: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, onToggleComplete }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(todo.id);
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
    </li>
  );
};

export default ToDoItem;
