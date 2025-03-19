import { useState } from 'react';
import './App.css';
import { fetchArt } from './api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //запит
  const handleSearch = async query => {
    try {
      setError(false);
      setLoading(true);
      setImages([]);
      const request = await fetchArt(query);
      setImages(request);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
    </>
  );
}

export default App;
