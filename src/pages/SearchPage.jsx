// src/pages/SearchPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SearchResult from '../components/SearchResult';
import Footer from '../components/Footer';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const searchTerm = query.get('query');

  return (
    <div>
      <Header />
      <h2>Search Results for: {searchTerm}</h2>
      <SearchResult searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default SearchPage;