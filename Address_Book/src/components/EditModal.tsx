import React, { useState } from "react";

interface EditModalProps {
  firstName: string;
  lastName: string;
  phone: string;
  onSave: (newFirstName: string, newLastName: string, newPhone: string) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  firstName,
  lastName,
  phone,
  onSave,
  onClose,
}) => {
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newPhone, setNewPhone] = useState(phone);
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!newFirstName.trim()) {
      setError("The first name is required");
      return;
    }
    if (!newLastName.trim()) {
      setError("The last name is required");
      return;
    }
    if (!newPhone.trim()) {
      setError("The phone is required");
      return;
    }

    onSave(newFirstName, newLastName, newPhone);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Edit Entry</h4>
        <input
          type="text"
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}
        />
        <input
          type="text"
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}
        />
        <input
          type="text"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
