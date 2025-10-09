import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="flex justify-between">
        <Link to="posts">Posts</Link>
        <Link to="profile">My Profile</Link>
      </div>
    </div>
  );
}
