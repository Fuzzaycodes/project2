import React, { useState,useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import { useMovies } from './MovieContext';

function Home() {
    const [movies, setMovies] = useState([]);
    const { addToToWatch, addToWatched, addToFavorites } = useMovies();
  
    useEffect(() => {
      fetch('http://localhost:5000/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.error('Error fetching movies:', error));
    }, []);
  
    const handleSearch = (query) => {
      fetch(`http://localhost:5000/movies?title_like=${query}`)
        .then(response => response.json())
        .then(data => setMovies(data))
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