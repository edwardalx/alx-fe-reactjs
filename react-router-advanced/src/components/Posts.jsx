import React from "react";
import posts from "../assets/post.json";
import Card from "./Card";
import { Link, Outlet, useParams } from "react-router-dom";

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <div className="flex flex-wrap gap-2">
        {posts.map((x) => (
          <Link to={`/post/${x.id}`} key={x.id}>
            <Card title={x.title} author={x.author}  />
          </Link>
        ))}
      </div>
    </div>
  );
}
