import React from 'react';

interface SearchBarProps {
  searchValue: string;
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, onSearch }) => {
  return (
    <input
      type="text"
      value={searchValue}
      placeholder="Search by title"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
