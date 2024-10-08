import React from 'react';

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
