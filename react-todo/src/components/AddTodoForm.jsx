import React from "react";
import { useState } from "react";

export default function AddTodoForm() {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("todo: ");
    setTodo("");
  };
  return (
    <div className="">
      <h2 className="flex justify-center my-10" > Add Todo Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <div className="flex justify-center gap-4">
          <label htmlFor="add" className="w-24 text-right">Add Todo</label>
          <input
            type="text"
            value={todo}
            onChange={(e) =>setTodo(e.target.value) }
            className="border rounded p-1"
          />
        </div>
        <button type="submit" className="rounded bg-blue-600 text-white py-1 px-4 hover:bg-blue-700 border w-20 mx-auto block" >
          Submit
        </button>
      </form>
    </div>
  );
}
