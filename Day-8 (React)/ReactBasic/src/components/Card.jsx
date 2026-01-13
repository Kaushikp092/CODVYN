import React from 'react'

const Card = ({tiltle,description}) => {
    const style = {
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: 'red',
      margin: '10px',
   }
  return (
    <div style={style}>
      <h2 >{tiltle}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
