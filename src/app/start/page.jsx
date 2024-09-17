"use client";
import React, { useState } from "react";
import { useFetchPostsQuery } from "@/redux/services/fetchquerry";
import Link from "next/link";

const Page = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;

  const { data: posts, error, isLoading } = useFetchPostsQuery({ limit, offset });

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handlePrevious = () => setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));

  if (isLoading) return <h1 className="text-center mt-[10%]">Loading...</h1>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div className="App">
      {posts && posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-400 mt-4 p-6 w-[90%] mx-auto">
              <Link href={`/start/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </Link>
            </div>
          ))}
          <div className="pagination-controls">
            <button onClick={handlePrevious} disabled={page === 1}>
              Previous
            </button>
            <button onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Page;
