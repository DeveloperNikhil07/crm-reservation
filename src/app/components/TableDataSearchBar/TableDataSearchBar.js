// Inside SearchBar.js

import React, { useState, useEffect } from "react";

const SearchBar = ({ Searchdata = [], setFilteredData = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // Delay of 300ms

    return () => clearTimeout(timer); // Cleanup the timer on each input change
  }, [searchTerm]);

  useEffect(() => {
    const filtered = filterData(Searchdata, debouncedSearchTerm);
    setFilteredData(filtered);
  }, [debouncedSearchTerm, Searchdata, setFilteredData]);

  const filterData = (Searchdata, searchTerm) => {
    if (!searchTerm) return Searchdata; // If no search term, return all data
    return Searchdata.filter((item) => {
      return Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  return (
    <div className="searchbar-field d-flex align-items-center justify-content-end">
      <input
        type="text"
        placeholder="Search Here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchBar;
