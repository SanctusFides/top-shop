import React from 'react'

export default function CheckoutCard({title, price, image}) {
  return (
    <div className='checkout-item'>
      {title}
      {price}
      <img src={image} />
    </div>
  )
}
