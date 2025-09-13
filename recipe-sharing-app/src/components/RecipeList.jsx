// RecipeList component
import { useRecipeStore } from "./recipeStore";
import RecipeDetails from "./RecipeDetails";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const [addFav, setAddFav] = useState(false)
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)
  const favorites = useRecipeStore((state) => state.favorites); // store of favorite IDs
  // const navigate = useNavigate();
  let finalRecipes;
  filteredRecipes.length !== 0
    ? (finalRecipes = filteredRecipes)
    : (finalRecipes = recipes);
  // const handleDetails = (id) => {
  //   console.log("Details for:", recipe);
  //   navigate(`/details/${id}`);
  // };
const handleAddFav = (recipe) => {
  recipe.id in favorites? removeFavorite(recipe) : addFavorite(recipe)
  setAddFav(!addFav)
}

  return (
    <div>
      {finalRecipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id); // check if this recipe is favorite
        return (
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
                {isFavorite ? "Remove Favorite" : "Add Favorite"}
              </button>
            </div>
          </div>
        );
      })}
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
