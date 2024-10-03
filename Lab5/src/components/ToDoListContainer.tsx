import React, { useState } from "react";
import { ToDo } from "../interfaces/toDo";
import AddToDoForm from "./AddToDoForm";
import ToDoList from "./ToDoList";
import SearchBar from "./SearchBar";
import useGetAllToDo from "../hooks/useGetAllToDo";
import Loader from "../components/Loader";

const ToDoListContainer: React.FC = () => {
  const { isLoading, data: toDos, setData: setToDos } = useGetAllToDo();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const addToDo = (title: string) => {
    const newTask: ToDo = {
      id: Date.now(),
      title,
      isComplete: false,
    };
    setToDos([newTask, ...(toDos || [])]);
  };

  const deleteToDo = (id: number) => {
    setToDos((prevToDos) => prevToDos?.filter((todo) => todo.id !== id) ?? []);
  };

  const toggleComplete = (id: number) => {
    setToDos(
      (prevToDos) =>
        prevToDos?.map((todo) =>
          todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        ) ?? []
    );
  };

  const filteredToDos = (toDos || []).filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchValue={searchQuery} onSearch={setSearchQuery} />

      <AddToDoForm onAddToDo={addToDo} />
      <Loader isLoading={isLoading}>
        <ToDoList
          toDos={toDos || []}
          onToggleComplete={toggleComplete}
          onDeleteToDo={deleteToDo}
        />
      </Loader>
    </div>
  );
};

export default ToDoListContainer;
