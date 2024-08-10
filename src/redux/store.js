// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./slice/todo";

// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
// });


import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './services/fetchquerry';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
