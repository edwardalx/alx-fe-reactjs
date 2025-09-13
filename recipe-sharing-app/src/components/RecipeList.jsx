// RecipeList component
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Use filtered recipes if available, otherwise all recipes
  const finalRecipes = filteredRecipes.length !== 0 ? filteredRecipes : recipes;

  // Toggle favorite for a recipe
  const handleToggleFavorite = (recipe) => {
    if (favorites.includes(recipe.id)) {
      removeFavorite(recipe);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div>
      {finalRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <p>
            <Link
              to={`/details/${recipe.id}`}
              style={{ color: "red", cursor: "pointer" }}
            >
              Click here for details
            </Link>
          </p>
          <div>
            <button onClick={() => handleToggleFavorite(recipe)}>
              {favorites.includes(recipe.id)
                ? "Remove Favorite"
                : "Add Favorite"}
            </button>
          </div>
        </div>
      ))}

      <div>
        <SearchBar />
        <p>
          <Link to={`/favorite`} style={{ color: "blue", cursor: "pointer" }}>
            FAVORITE
          </Link>
          <Link
            to={`/recommend`}
            style={{ color: "blue", cursor: "pointer", marginLeft: "10px" }}
          >
            Recommended
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RecipeList;
