import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Largelmage from '../components/Largelmage'; // 이 컴포넌트는 필요에 따라 사용
import ImageDetail from '../components/ImageDetail'; // 이 컴포넌트는 사진 정보 표시용
import SimilarImages from '../components/SimilarImages';
import Footer from '../components/Footer';
import axios from 'axios';

const PhotoDetailPage = () => {
  const { photoId } = useParams(); // URL에서 photoId 가져오기
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios.get(`https://api.unsplash.com/photos/${photoId}`, {
      headers: {
        'Authorization': `Client-ID ${API_KEY}`
      }
    })
    .then(response => {
      setPhoto(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching photo:', error);
      setError('Failed to load photo.');
      setLoading(false);
    });
  }, [photoId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!photo) return <div>No photo found.</div>;

  return (
    <div>
      <Header />
      <Largelmage imageUrl={photo.urls?.full} /> {/* Largelmage에 사진 URL 전달 */}
      <ImageDetail 
        description={photo.alt_description} 
        userName={photo.user?.name} 
      />
      <SimilarImages />
      <Footer />
    </div>
  );
};

export default PhotoDetailPage;