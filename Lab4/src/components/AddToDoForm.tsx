import React, { useState } from 'react';

interface AddToDoFormProps {
  onAddToDo: (title: string) => void;
}

const AddToDoForm: React.FC<AddToDoFormProps> = ({ onAddToDo }) => {
  const [newToDo, setNewToDo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newToDo.trim()) {
      onAddToDo(newToDo);
      setNewToDo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddToDoForm;
