import React from "react";

interface SearchBarProps {
  searchValue: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, onSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search by first or last name"
      />
    </div>
  );
};

export default SearchBar;
