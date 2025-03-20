import { useState, useEffect } from 'react';
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

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  //запит до Load more
  // const handleSearch = async query => {
  //   try {
  //     setError(false);
  //     setLoading(true);
  //     setImages([]);
  //     const request = await fetchArt(query);
  //     setImages(request);
  //   } catch {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSearch = newImages => {
    setSearch(newImages);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (search === '') {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoading(true);
        const request = await fetchArt(page, search);
        setImages(prevImages => {
          return [...prevImages, ...request];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
    console.log(page);
  }, [page, search]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {images.length > 0 && (
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </button>
      )}
    </>
  );
}

export default App;
