import { configureStore } from '@reduxjs/toolkit';
import { tmbdApi } from '../services/TMDB';

export default configureStore({
  reducer: {
    [tmbdApi.reducerPath]: tmbdApi.reducer,
  },
});
