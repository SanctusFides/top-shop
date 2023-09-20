import React from 'react'
import ItemCardCSS from "./ItemCard.module.css"

// eslint-disable-next-line react/prop-types
export default function ItemCard({id, title, price, image}) {
  return (
    <div className={ItemCardCSS.cardBody}>
      <img src={image} className={ItemCardCSS.thumbnail} />
      <p> {title} </p>
      ${price}
      <button>Add</button>
    </div>
  )
}
