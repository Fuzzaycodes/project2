import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export function useMovies() {
  return useContext(MovieContext);
}

function MovieProvider({ children }) {
  const [toWatch, setToWatch] = useState([]);
  const [watched, setWatched] = useState([]);
  const [favorites, setFavorites] = useState([]);
  //const [currentlyWatching, setCurrentlyWatching] = useState([]);

  const addToToWatch = (movie) => {
    setToWatch(prevToWatch => [...prevToWatch, movie]);
  };

  const addToWatched = (movie) => {
    setWatched(prevWatched => [...prevWatched, movie]);
  };

  const addToFavorites = (movie) => {
    setFavorites(prevFavorites => [...prevFavorites, movie]);
  };

  const markAsWatched = (movie) => {
    setToWatch(prevToWatch => prevToWatch.filter(m => m.imdbID !== movie.imdbID));
    setWatched(prevWatched => [...prevWatched, movie]);
  };

  const removeFromFavorites = (movie) => {
    setFavorites(prevFavorites => prevFavorites.filter(m => m.imdbID !== movie.imdbID));
  };

  return (
    <MovieContext.Provider
      value={{
        toWatch,
        watched,
        favorites,
       // currentlyWatching,
        addToToWatch,
        addToWatched,
        addToFavorites,
        markAsWatched,
        removeFromFavorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
