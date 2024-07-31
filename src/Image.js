
import React from 'react';
import './Image.css'; 

const Image = ({ src, title }) => {
  return (
    <div className="image-container">
      <img src={src} alt={title} className="image" />
      <p className="title">{title}</p>
    </div>
  );
};

export default Image;
