import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import posts from '../assets/post.json'
export default function Profile() {
    
  return (
    <div className="flex flex-col">
      <Link to="/">
        <h2 className="m-2">Profile</h2>{" "}
      </Link>

      <div className="flex justify-between gap-10 w-full">
        <Link to="details">ProfileDetails</Link>
        <Link to="settings">ProfileSettings</Link>
      </div>
      <Outlet />
    </div>
  );
}
