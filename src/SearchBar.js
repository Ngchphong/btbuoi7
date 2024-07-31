
import React, { useState } from 'react';
import './SearchBar.css'; 
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
