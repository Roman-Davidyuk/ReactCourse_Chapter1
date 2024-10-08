import React, { useState } from "react";

interface AddAddressFormProps {
  onAddAddressBook: (firstName: string, lastName: string, phone: string) => void;
}

const AddAddressForm: React.FC<AddAddressFormProps> = ({ onAddAddressBook }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim()) {
      setError("The first name is required");
      return;
    }
    if (!lastName.trim()) {
      setError("The last name is required");
      return;
    }
    if (!phone.trim()) {
      setError("The phone is required");
      return;
    }

    onAddAddressBook(firstName, lastName, phone);
    setFirstName("");
    setLastName("");
    setPhone("");
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddAddressForm;
