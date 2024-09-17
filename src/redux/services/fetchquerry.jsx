import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the Post API service
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchPost: builder.query({
      query: () => 'posts',
      keepUnusedDataFor: 300, // Keep cached data for 300 seconds (5 minutes)
    }),


    fetchPostId: builder.query({
      query: (id) => `posts/${id}`,
      keepUnusedDataFor: 300, // Keep cached data for 300 seconds (5 minutes)
    }),
  }),
});

// Export the auto-generated hooks for the queries
export const {  useFetchPostQuery, useFetchPostIdQuery } = postApi;
