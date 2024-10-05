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
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!newTitle.trim()) {
      setError("Title is required");
    } else {
      onSave(newTitle);
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Edit Task</h4>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
            setError(null);
          }}
          className={error ? "input-error" : ""}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
