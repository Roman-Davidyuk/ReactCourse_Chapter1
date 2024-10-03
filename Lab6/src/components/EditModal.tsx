import React, { useState } from "react";

interface EditModalProps {
  todoTitle: string;
  onSave: (newTitle: string) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  todoTitle,
  onSave,
  onClose,
}) => {
  const [newTitle, setNewTitle] = useState(todoTitle);

  const handleSave = () => {
    onSave(newTitle);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Edit Task</h4>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
