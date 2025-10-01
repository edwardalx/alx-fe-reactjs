import { useState } from "react";

function AddRecipeForm() {
  //   const [count, setCount] = useState(1);
  const [title, setTitle] = useState("");
  const [instruction, setInstruction] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [errors, setErrors] = useState(null);

  //   const addInstructionStep = () => {
  //     setCount(count + 1);
  //     setIngeredients(...ingeredients,{id:ingeredients.length+1, content:""})
  //     return (
  //       <>
  //         <label htmlFor="title">Step {count}</label>
  //         <input type="text" id="instructions" />
  //       </>
  //     );
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
//validate
    if (!title) {
      setErrors("Please input tiltle");
      return
    }
    ingredients.length < 1 && setError("Please add ingredients");
    localStorage.setItem(
      "recipe",
      JSON.stringify([
        { title: title, instructions: instruction, ingredients: ingredients },
      ])
    );
    setTitle("");
    setIngredients([]);
    setInstruction([]);
    setErrors(null);
  };
  return (
    <>
      <div className="text-lg font-medium">Add Recipe</div>
      {errors && <p className="text-red-600">❗{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 justify-center text-left"
      >
        <div className="flex gap-2 ">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border border-black rounded "
          />
        </div>
        <div className="flex gap-2 ">
          <label htmlFor="ingredients" className="font-medium">
            Ingredients
          </label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
            className="border border-black rounded "
          />
        </div>
        <div className="flex gap-2 ">
          <label htmlFor="preparation-steps" className="font-medium">
            Prepration Steps
          </label>
          <input
            type="text"
            id="preparation-steps"
            value={instruction}
            onChange={(e) => {
              setInstruction(e.target.value);
            }}
            className="border border-black rounded "
          />
        </div>
        <button
          type="submit"
          className=" py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors w-20 flex mx-auto"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddRecipeForm;
