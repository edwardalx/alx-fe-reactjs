import React from "react";
import { useRecipeStore } from "./recipeStore";

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  return (
    <div>
      <h2>RecommendationsList</h2>

      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationsList;
