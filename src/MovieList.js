import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies = [], onAddToToWatch, onAddToWatched, onAddToFavorites }) {
  if (movies.length === 0) {
    return <p>No movies available.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToToWatch={onAddToToWatch}
          onAddToWatched={onAddToWatched}
          onAddToFavorites={onAddToFavorites}
        />
      ))}
    </div>
  );
}

export default MovieList;
