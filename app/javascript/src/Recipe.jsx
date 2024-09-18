import React from 'react'

const Recipe = (props) => {
  const { details } = props

  console.log(props)

  return (
    <>
    <table>
      <tr>
        <td>Title:</td>
        <td>{details.title}</td>
      </tr>
      <tr>
        <td>Ingredients:</td>
        <td>{details.ingredients}</td>
      </tr>
      <tr>
        <td>Instructions:</td>
        <td>{details.instructions}</td>
      </tr>
    </table>
    <hr />
    </>
  )
}

export default Recipe