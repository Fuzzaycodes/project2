import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export function useMovies() {
  return useContext(MovieContext);
}

function MovieProvider({ children }) {
  const [toWatch, setToWatch] = useState([]);
  const [watched, setWatched] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToToWatch = (movie) => {
    setToWatch(prevToWatch => [...prevToWatch, movie]);
  };

  const addToWatched = (movie) => {
    setWatched(prevWatched => [...prevWatched, movie]);
  };

  const addToFavorites = (movie) => {
    setFavorites(prevFavorites => [...prevFavorites, movie]);
  };

  return (
    <MovieContext.Provider
      value={{
        toWatch,
        watched,
        favorites,
        addToToWatch,
        addToWatched,
        addToFavorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
