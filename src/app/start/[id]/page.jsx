// page.js
"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { useFetchPostIdQuery } from '@/redux/services/fetchquerry';

const Page = () => {
  // Get the id from useParams
  const { id } = useParams();

  // Use the fetchPost query
  const { data, error, isLoading } =useFetchPostIdQuery(id);

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post details</p>;

  return (
    <section>
      <h1>Post Details</h1>
      {/* Render post details */}
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </section>
  );
}

export default Page;
