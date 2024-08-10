import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API service
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => 'posts',
    }),
  }),
});

// Export the auto-generated hook for the `fetchTodos` query endpoint
export const { useFetchTodosQuery } = todoApi;
