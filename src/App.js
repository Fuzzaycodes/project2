import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ToWatch from './ToWatch';
import Watched from './Watched';
import Favorites from './Favorites';
import CurrentlyWatching from './CurrentlyWatching';
import MovieProvider from './MovieContext';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-watch" element={<ToWatch />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/currently-watching" element={<CurrentlyWatching />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
