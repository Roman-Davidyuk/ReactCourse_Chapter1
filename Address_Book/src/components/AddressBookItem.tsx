import React, { useState } from "react";
import { AddressBook } from "../interfaces/AddressBook";
import EditModal from "./EditModal";

interface AddressBookItemProps {
  entry: AddressBook;
  onDeleteAddressBook: (id: number) => void;
  onEditAddressBook: (id: number, newFirstName: string, newLastName: string, newPhone: string) => void;
}

const AddressBookItem: React.FC<AddressBookItemProps> = ({
  entry,
  onDeleteAddressBook,
  onEditAddressBook,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDeleteAddressBook(entry.id);
  };

  const handleSave = (newFirstName: string, newLastName: string, newPhone: string) => {
    onEditAddressBook(entry.id, newFirstName, newLastName, newPhone);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{entry.id}</td>
      <td>{entry.firstName}</td>
      <td>{entry.lastName}</td>
      <td>{entry.phone}</td>
      <td>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
        {isEditing && (
          <EditModal
            firstName={entry.firstName}
            lastName={entry.lastName}
            phone={entry.phone}
            onSave={handleSave}
            onClose={() => setIsEditing(false)}
          />
        )}
      </td>
    </tr>
  );
};

export default AddressBookItem;
