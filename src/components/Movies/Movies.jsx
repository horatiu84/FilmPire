import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuerry } from '../../services/TMDB';

function Movies() {
  // const { data } = useGetMoviesQuerry();

  // console.log(data);

  const page = 1;
  console.log(process.env.REACT_APP_TMBD_KEY);
  const tmdbApiKey = process.env.REACT_APP_TMBD_KEY;
  console.log(tmdbApiKey);

  fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${tmdbApiKey}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>Movies</div>
  );
}

export default Movies;
