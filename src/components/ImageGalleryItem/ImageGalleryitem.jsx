import React from 'react';

export default function ImageGalleryItem({ image, openModal }) {
  return (
    <li className="gallery-item" onClick={() => openModal(image.largeImageURL)}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
}
