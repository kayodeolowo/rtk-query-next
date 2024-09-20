import { configureStore } from '@reduxjs/toolkit';

import { postApi } from '../app/services/fetchquerry';

export const store = configureStore({
  reducer: {

    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
