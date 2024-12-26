// src/components/SearchResult.jsx
import React, { useEffect, useState } from 'react';

const SearchResult = ({ searchTerm }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchTerm) {
        console.error('No search term provided');
        return;
      }

      try {
        console.log('Fetching results for:', searchTerm); // 디버깅용 로그
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}` // 환경 변수에서 API 키 가져오기
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API response:', data); // API 응답 로그
        setResults(data.results || []); // 응답 데이터가 예상한 구조인지 확인
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <div>
      {results.length > 0 ? (
        results.map(photo => (
          <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
        ))
      ) : (
        <p>No results found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default SearchResult;