import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set(({recipes})),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id)})),
  updateRecipe: (updatedRecipe) => set((state) => ({ recipes: state.recipes.map(recipe => updatedRecipe.id === recipe.id? {...recipe, ...updatedRecipe} : recipe)})),
   searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
    filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    })),
    favorites: [],
    addFavorite: (newRecipe) => set((state) => ({ favorites: [...state.favorites, newRecipe.id] })),
    removeFavorite:(recipeToRemove) => set((state) => ({favorites: state.favorites.filter(recipe => recipe.id !== recipeToRemove.id)})),

    recommendations: [],
    addRecommend: (newRecipe) => set((state) => ({ Recommend: [...state.Recommend, newRecipe] })),
    removeRecommend:(recipeToRemove) => set((state) => ({Recommend: state.Recommend.filter(recipe => recipe.id !== recipeToRemove.id)}))
}));

