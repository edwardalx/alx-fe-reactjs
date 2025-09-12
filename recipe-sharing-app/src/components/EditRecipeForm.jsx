import { useRecipeStore } from "./recipeStore";
import { useState } from "react";

export default function EditRecipeForm({recipe}) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const recipes = useRecipeStore((state) => state.recipes);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleEdit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    console.log("Updated:", { ...recipe, title, description });
  };
  return (
    <>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter recipe description"
        />
        <input type="submit" value={"Save Changes"} />
      </form>
    </>
  );
}
