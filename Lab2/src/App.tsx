import React, { useState } from 'react';
import { ToDo } from './interfaces/toDo';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [toDos, setToDos] = useState<Array<ToDo>>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const addToDo = (title: string) => {
    const newTask: ToDo = {
      id: toDos.length + 1,
      title,
      isComplete: false,
    };
    setToDos([...toDos, newTask]);
  };

  const deleteToDo = (id: number) => {
    setToDos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
  };


  const toggleComplete = (id: number) => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const filteredToDos = toDos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <SearchBar onSearch={setSearchQuery} />
      <AddToDoForm onAddToDo={addToDo} />
      <ToDoList toDos={filteredToDos} onToggleComplete={toggleComplete} onDeleteToDo={deleteToDo} />
    </div>
  );
};

export default App;
