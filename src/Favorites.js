import React from 'react';
import MovieList from './MovieList';
import { useMovies } from './MovieContext';

function Favorites() {
  const { favorites, removeFromFavorites } = useMovies();

  return (
    <div>
      <h2>Favorites</h2>
      <MovieList
        movies={favorites}
        onRemoveFromList={removeFromFavorites}
        listType="favorites"
      />
    </div>
  );
}

export default Favorites;
