import React from 'react';
import MovieList from './MovieList';
import { useMovies } from './MovieContext';

function Watched() {
  const { watched, removeFromWatched } = useMovies();

  return (
    <div>
      <h2>Watched</h2>
      <MovieList
        movies={watched}
        onRemoveFromList={removeFromWatched}
        listType="watched"
      />
    </div>
  );
}

export default Watched;
