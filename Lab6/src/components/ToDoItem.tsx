import React, { useState } from "react";
import { ToDo } from "../interfaces/toDo";
import EditModal from "./EditModal";

interface ToDoItemProps {
  todo: ToDo;
  onToggleComplete: (id: number) => void;
  onDeleteToDo: (id: number) => void;
  onEditToDo: (id: number, newTitle: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  todo,
  onToggleComplete,
  onDeleteToDo,
  onEditToDo,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    onToggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    onDeleteToDo(todo.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (newTitle: string) => {
    onEditToDo(todo.id, newTitle);
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
      <button onClick={handleEditClick} className="todo-edit">
        Edit
      </button>
      <button onClick={handleDeleteClick} className="todo-delete">
        Delete
      </button>

      {isEditing && (
        <EditModal
          todoTitle={todo.title}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </li>
  );
};

export default ToDoItem;
