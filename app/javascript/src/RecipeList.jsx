import React, {useState, useEffect} from 'react'
import Recipe from './Recipe'
import {Row, Col} from "antd"

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
        <Row gutter={20}>
          {
          recipes && recipes.map( recipe =>
              <Col xs={24} md={12}>
                <Recipe details={recipe} />
              </Col>
          )
          }
        </Row>
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