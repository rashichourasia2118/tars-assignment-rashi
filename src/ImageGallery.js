
import React, { useState, useEffect } from 'react';
import { fetchPhotos, searchPhotos } from './unsplash';
import ImageModal from './ImageModal';
import './ImageGallery.css';

const ImageGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchDefaultPhotos = async () => {
      const defaultPhotos = await fetchPhotos('');
      setPhotos(defaultPhotos);
    };

    fetchDefaultPhotos();
  }, []);

  const handleSearch = async () => {
    const results = await searchPhotos(searchQuery);
    setPhotos(results);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="thumbnails">
        {photos.map((photo) => (
          <div key={photo.id} className="thumbnail" onClick={() => handlePhotoClick(photo)}>
            <img src={photo.urls.thumb} alt={photo.description} />
          </div>
        ))}
      </div>
      <ImageModal photo={selectedPhoto} onClose={handleCloseModal} />
    </div>
  );
};

export default ImageGallery;
