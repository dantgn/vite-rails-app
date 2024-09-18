import React, {useState, useEffect} from 'react'
import RecipeList from './RecipeList'

const App = () => {
  const [recipes, setRecipes] = useState()

  useEffect(() => {
    fetch("/api/v1/recipes")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRecipes(data);
      });
  }, [])

  useEffect(() => {
    console.log("change!")
    console.log(recipes)
  }, [recipes])

  return (
    <div>
      <h1>Daniel's Recipes</h1>
      <br/>
      <RecipeList />
    </div>
  )
}

export default App