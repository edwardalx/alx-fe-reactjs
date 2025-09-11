  // RecipeDetails component
  import { useRecipeStore } from './recipeStore';
  import EditRecipeForm from './EditRecipeForm';
  import DeleteRecipeButton from './DeleteRecipeButton';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        <button onClick={EditRecipeForm}>Edit</button>
        <button onClick={DeleteRecipeButton}>Delete</button>
      </div>
    );
  };

  export default RecipeDetails