import React from "react";

interface FilterBoxProps {
  filter: string;
  onFilterChange: (value: string) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter users by name"
      value={filter} // Передаємо стан як значення інпуту
      onChange={(e) => onFilterChange(e.target.value)} // Оновлюємо стан при введенні
      className="filter-box"
    />
  );
};

export default FilterBox;
