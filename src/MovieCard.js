import React from 'react';

function MovieCard({ movie, onAddToToWatch, onAddToWatched, onAddToFavorites }) {
  if (!movie) {
    return <div>Movie data is missing.</div>;
  }

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <div className="movie-card-buttons">
        <button onClick={() => onAddToToWatch(movie)}>Add to To Watch</button>
        <button onClick={() => onAddToWatched(movie)}>Add to Watched</button>
        <button onClick={() => onAddToFavorites(movie)}>Add to Favorites</button>
      </div>
    </div>
  );
}

export default MovieCard;
