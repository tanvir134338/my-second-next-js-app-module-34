import React from "react";

const Post = ({ post }) => {
  return (
    <div className="border border-amber-50 rounded-2xl m-4 p-2">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
