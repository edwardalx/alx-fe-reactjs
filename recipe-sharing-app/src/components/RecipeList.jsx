// RecipeList component
import { useRecipeStore } from "./recipeStore";
import RecipeDetails from "./RecipeDetails";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  // const navigate = useNavigate();
  let finalRecipes;
  filteredRecipes.length !== 0
    ? (finalRecipes = filteredRecipes)
    : (finalRecipes = recipes);
  // const handleDetails = (id) => {
  //   console.log("Details for:", recipe);
  //   navigate(`/details/${id}`);
  // };

  return (
    <div>
      {finalRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <p> 
          <Link to={`/details/${id}`} style={{ color: "red", cursor: "pointer" }}>
             Click here fore detail
          </Link>
          </p>
        </div>
      ))}
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default RecipeList;
