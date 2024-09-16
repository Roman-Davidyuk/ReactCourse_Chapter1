import React from 'react';
import { ToDo } from '../interfaces/toDo';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  toDos: Array<ToDo>;
  onToggleComplete: (id: number) => void;
  onDeleteToDo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ toDos, onToggleComplete, onDeleteToDo }) => {
  return (
    <ul>
      {toDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onDeleteToDo={onDeleteToDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
