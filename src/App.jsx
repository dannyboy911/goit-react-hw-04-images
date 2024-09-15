import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import './Styles/styles.css';

const API_KEY = '45012437-b55626f190d71cd0f0306418b';
const BASE_URL = `https://pixabay.com/api/`;

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async (query, page) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSearchSubmit = searchQuery => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
    scrollToBottom();
  };

  const openModal = largeImageURL => {
    setSelectedImage(largeImageURL);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={loadMoreImages} />}
      {selectedImage && (
        <Modal largeImageURL={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
}
