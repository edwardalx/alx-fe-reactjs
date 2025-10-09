import React from "react";
import { useParams } from "react-router-dom";
import posts from "../assets/post.json";
import Card from "./Card";

export default function PostDetails() {
  const { id } = useParams();
  const selectPost = posts.find((x) => x.id === parseInt(id));

  if (!selectPost) return <p>Post not found!</p>;

  return (
    <div>
      <h2>Post Details</h2>
      <Card
        key={selectPost.id}
        title={selectPost.title}
        author={selectPost.author}
        content={selectPost.content}
      />
    </div>
  );
}
