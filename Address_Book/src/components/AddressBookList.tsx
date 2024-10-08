import React from "react";
import { AddressBook } from "../interfaces/AddressBook";
import AddressBookItem from "./AddressBookItem";

interface AddressBookListProps {
  addressBooks: Array<AddressBook>;
  onDeleteAddressBook: (id: number) => void;
  onEditAddressBook: (id: number, newFirstName: string, newLastName: string, newPhone: string) => void;
}

const AddressBookList: React.FC<AddressBookListProps> = ({
  addressBooks,
  onDeleteAddressBook,
  onEditAddressBook,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addressBooks.map((entry) => (
          <AddressBookItem
            key={entry.id}
            entry={entry}
            onDeleteAddressBook={onDeleteAddressBook}
            onEditAddressBook={onEditAddressBook}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AddressBookList;
