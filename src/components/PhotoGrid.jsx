import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기
import '../styles/PhotoGrid.scss';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate(); // navigate 함수 생성

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        'Authorization': `Client-ID ${API_KEY}`
      },
      params: {
        count: 20
      }
    })
    .then(response => {
      setPhotos(response.data);
    })
    .catch(error => console.log('Error:', error));
  }, []);

  const handlePhotoClick = (photoId) => {
    navigate(`/photo/${photoId}`); // 클릭한 사진의 ID로 PhotoDetailPage로 이동
  };

  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <div key={photo.id} className="photo-item" onClick={() => handlePhotoClick(photo.id)}>
          <img src={photo.urls?.regular} alt={photo.alt_description} />
          <div className="photo-info">
            <p>{photo.alt_description || 'No description available'}</p>
            <p>By: {photo.user?.name || 'Unknown'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;