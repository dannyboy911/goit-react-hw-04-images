import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryitem';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
}
