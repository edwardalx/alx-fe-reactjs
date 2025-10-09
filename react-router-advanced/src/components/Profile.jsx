import React from "react";
import { Link, Outlet } from "react-router-dom";
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
