import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
      // Get raw state from the store
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
//   const favorites = 
//     favoriteIds.map((id) =>
//       recipes.find((recipe) => recipe.id === id)
//     );
// const favorites = useRecipeStore((state) =>
//   state.recipes.filter((recipe) => state.favorites.includes(recipe.id))
// );
  const favorites = favoriteIds
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // removes undefined in case a recipe was deleted


  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList
