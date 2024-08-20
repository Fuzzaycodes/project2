import React from 'react';
import MovieList from './MovieList';
import { useMovies } from './MovieContext';

function ToWatch() {
  const { toWatch, markAsWatched, addToCurrentlyWatching } = useMovies();

  return (
    <div>
      <h2>To Watch</h2>
      <MovieList
        movies={toWatch}
        onAddToList={addToCurrentlyWatching}
        onRemoveFromList={markAsWatched}
        listType="to-watch"
      />
    </div>
  );
}

export default ToWatch;
