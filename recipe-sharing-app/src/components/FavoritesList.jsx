import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
    const favorites = useRecipeStore((state) =>state.favorites);
//   const favorites = useRecipeStore((state) =>
//     state.favorites.map((id) =>
//       state.recipes.find((recipe) => recipe.id === id)
//     ));
// const favorites = useRecipeStore((state) =>
//   state.recipes.filter((recipe) => state.favorites.includes(recipe.id))
// );


  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList
