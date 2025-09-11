import React from 'react'

export default function DeleteRecipeButton() {
    const  handleDelete = ()=> {
        console.log("Delete logic here")
    }
  return (
    <div onClick={handleDelete}>DeleteRecipeButton</div>
  )
}
