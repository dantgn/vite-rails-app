import React from 'react'
import { Card } from "antd";


const Recipe = (props) => {
  const { details } = props

  console.log(props)

  return (
    <>
    <Card
      hoverable
      title={details.title}>
        <b>Ingredients</b>
        <br/>
        {details.ingredients}
        <br/>
        <b>Instructions</b>
        <br/>
        {details.instructions}
    </Card>
    </>
  )
}

export default Recipe