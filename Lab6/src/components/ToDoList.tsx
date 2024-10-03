import React from "react";
import { ToDo } from "../interfaces/toDo";
import ToDoItem from "./ToDoItem";

interface ToDoListProps {
  toDos: Array<ToDo>;
  onToggleComplete: (id: number) => void;
  onDeleteToDo: (id: number) => void;
  onEditToDo: (id: number, newTitle: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
  toDos,
  onToggleComplete,
  onDeleteToDo,
  onEditToDo,
}) => {
  return (
    <ul>
      {toDos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteToDo={onDeleteToDo}
          onEditToDo={onEditToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
