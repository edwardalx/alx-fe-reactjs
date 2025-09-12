// RecipeList component
  import { useRecipeStore } from './recipeStore';
  import RecipeDetails from './RecipeDetails';
  import { useNavigate } from 'react-router-dom';
  import SearchBar from './SearchBar';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
    const navigate = useNavigate();

    const handleDetails = (id) => {
      // console.log("Details for:", recipe);
      navigate(`/details/${id}`)
    }

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id} >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p style={{color:'red', cursor:'pointer'}} onClick={() => handleDetails(recipe.id)}>Click here fore detail</p>
          </div>
        ))}
        <div>
          <SearchBar />
        </div>
      </div>
    );
  };

  export default RecipeList