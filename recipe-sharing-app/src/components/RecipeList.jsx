// RecipeList component
  import { useRecipeStore } from './recipeStore';
  import RecipeDetails from './RecipeDetails';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    const handleDetails = (recipe) => {
      // console.log("Details for:", recipe);
      RecipeDetails(recipe.id)
    }

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id} >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p onClick={() => handleDetails(recipe)}>Click here fore detail</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList