/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './components';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
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
