import React from 'react';
import MovieList from './MovieList';
import { useMovies } from './MovieContext';

function CurrentlyWatching() {
  const { currentlyWatching, markAsWatched, addToFavorites } = useMovies();

  return (
    <div>
      <h2>Currently Watching</h2>
      <MovieList
        movies={currentlyWatching}
        onAddToList={addToFavorites}
        onRemoveFromList={markAsWatched}
        listType="currently-watching"
      />
    </div>
  );
}

export default CurrentlyWatching;
