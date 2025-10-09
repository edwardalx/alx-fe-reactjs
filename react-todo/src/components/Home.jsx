import React from "react";
import {Link} from 'react-router-dom'

export default function () {
  return (
    <div className="flex justify-between">
      <p>To Do App</p>
      <div className="flex gap-8">
        <Link to="/add">Add Todo</Link>
        <Link to="/list">Todo List</Link>
      </div>
    </div>
  );
}
