"use client";
import React from 'react';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); // Pass the query to the parent
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
