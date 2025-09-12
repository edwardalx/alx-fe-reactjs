// RecipeDetails component
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );
  const [editing, setEditing] = useState(false);
  if (!recipe) return <p>Recipe not found</p>;
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <button
        onClick={() => {
          setEditing(!editing);
        }}
      >
        {editing ? "Calcel Edit" : "Edit"}
      </button>
      {/* Show form only if editing */}
      {editing && <EditRecipeForm recipe={recipe} />}

      {/* Delete button */}
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
