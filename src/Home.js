import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import { useMovies } from './MovieContext';

const API_KEY = '947e2fc6';

function Home() {
  const [movies, setMovies] = useState([]);
  const { addToToWatch, addToWatched, addToFavorites } = useMovies();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=star wars&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.Search))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleSearch = (query) => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.Search))
      .catch(error => console.error('Error fetching movies:', error));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList
        movies={movies}
        onAddToToWatch={addToToWatch}
        onAddToWatched={addToWatched}
        onAddToFavorites={addToFavorites}
      />
    </div>
  );
}

export default Home;
