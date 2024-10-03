import React, { useState } from "react";
import Loader from "./Loader";
import ToDoList from "./ToDoList";
import AddToDoForm from "./AddToDoForm";
import SearchBar from "./SearchBar";
import useGetAllToDo from "../hooks/useGetAllToDo";

const ToDoListContainer: React.FC = () => {
  const { isLoading, data: toDos, setData: setToDos } = useGetAllToDo();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const addToDo = (title: string) => {
    const newTask = {
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

  const editToDo = (id: number, newTitle: string) => {
    setToDos(
      (prevToDos) =>
        prevToDos?.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
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
          toDos={filteredToDos}
          onToggleComplete={toggleComplete}
          onDeleteToDo={deleteToDo}
          onEditToDo={editToDo}
        />
      </Loader>
    </div>
  );
};

export default ToDoListContainer;
