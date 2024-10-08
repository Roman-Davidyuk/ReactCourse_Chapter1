import React, { useState } from "react";
import AddressBookList from "./AddressBookList";
import AddAddressForm from "./AddAddressForm";
import SearchBar from "../components/SearchBar";
import {AddressBook} from "../interfaces/AddressBook"

const AddressBookContainer: React.FC = () => {
  const [addressBooks, setAddressBooks] = useState<Array<AddressBook>>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const addAddressBook = (firstName: string, lastName: string, phone: string) => {
    const newEntry = {
      id: Date.now(),
      firstName,
      lastName,
      phone,
    };
    setAddressBooks([newEntry, ...addressBooks]);
  };

  const deleteAddressBook = (id: number) => {
    setAddressBooks((prevBooks) => prevBooks.filter((entry) => entry.id !== id));
  };

  const editAddressBook = (id: number, newFirstName: string, newLastName: string, newPhone: string) => {
    setAddressBooks((prevBooks) =>
      prevBooks.map((entry) =>
        entry.id === id
          ? { ...entry, firstName: newFirstName, lastName: newLastName, phone: newPhone }
          : entry
      )
    );
  };

  const filteredAddressBooks = addressBooks.filter((entry) =>
    `${entry.firstName} ${entry.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchValue={searchQuery} onSearch={setSearchQuery} />
      <AddAddressForm onAddAddressBook={addAddressBook} />
        {filteredAddressBooks.length > 0 ? (
          <AddressBookList
            addressBooks={filteredAddressBooks}
            onDeleteAddressBook={deleteAddressBook}
            onEditAddressBook={editAddressBook}
          />
        ) : (
          <p>No data to display</p>
        )}
    </div>
  );
};

export default AddressBookContainer;
