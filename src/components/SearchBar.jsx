// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    // SearchPage로 이동하면서 검색어를 쿼리 매개변수로 전달
    history.push(`/search?query=${searchTerm}`);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for photos"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;