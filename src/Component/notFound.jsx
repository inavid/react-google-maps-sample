import React from 'react';
import NotFoundImage from '../assets/not_found_img.jpg';
import '../App.css';

export const NotFound = () => {
  return (
    <div className="container">
      <img 
        className="not-found-image"
        src={NotFoundImage} 
        alt="Not found" 
      />
    </div>
  )
}