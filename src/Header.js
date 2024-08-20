import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/to-watch">To Watch</Link>
        <Link to="/watched">Watched</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/currently-watching">Currently Watching</Link>
      </nav>
    </header>
  );
}

export default Header;
