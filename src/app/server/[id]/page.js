import React from 'react';

const fetchPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const PostDetails = async ({ params }) => {
  const { id } = params;
  const post = await fetchPost(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
