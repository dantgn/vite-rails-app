import React, {useState, useEffect} from 'react'
import Recipe from './Recipe'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

    useEffect(() => {
      fetch("/api/v1/recipes")
        .then(response => response.json())
        .then(data => setRecipes(data))
  }, [])

  return (
    <>
      {
        recipes && recipes.map( recipe =>
          <div key={recipe.id}>
            <Recipe details={recipe} />
          </div>
        )
      }
      {
        !recipes && (
          <p>There are no recipes yet, sorry.</p>
        )
      }
    </>
  )
}

export default RecipeList