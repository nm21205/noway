import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PhotoDetailPage from './pages/PhotoDetailPage'; // PhotoDetailPage 추가

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/photo/:photoId" element={<PhotoDetailPage />} /> {/* 이 경로 추가 */}
            </Routes>
        </Router>
    );
};

export default App;