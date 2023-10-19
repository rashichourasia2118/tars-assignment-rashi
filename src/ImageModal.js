
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user-details">
          <p>User: {photo.user.name}</p>
          <p>Likes: {photo.likes}</p>
          <p>Social Links: {photo.user.links.html}</p>
        </div>
        <img src={photo.urls.regular} alt={photo.description} />
        <span className="close" onClick={onClose}>&times;</span>
      </div>
    </div>
  );
};

export default ImageModal;
