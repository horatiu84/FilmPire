/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './components';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
