import React from 'react'

const Product = (props) =>  {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>{props.cost}</p>
    </div>
  )
}

export default Product;


