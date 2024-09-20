"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { useFetchPostIdQuery } from '../../services/fetchquerry';

const Page = () => {
  // Get the id from useParams
  const { id } = useParams();

  // Use the fetchPostId query and destructure refetch method
  const { data, error, isLoading, refetch } = useFetchPostIdQuery(id);

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post details</p>;

  return (
    <section>
      <h1>Post Details</h1>
      {/* Render post details */}
      <h2>{data.title}</h2>
      <p>{data.body}</p>

      {/* Button to refresh data */}
      <button 
        onClick={() => refetch()} // Refetch data when button is clicked
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Refresh
      </button>
    </section>
  );
}

export default Page;
