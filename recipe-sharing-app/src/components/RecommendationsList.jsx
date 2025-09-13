import React from 'react'
import { useRecipeStore } from './recipeStore'

function RecommendationsList() {
    const recommend = useRecipeStore(state => state.recommend)
  return (
    <div>RecommendationsList</div>
  )
}

export default RecommendationsList