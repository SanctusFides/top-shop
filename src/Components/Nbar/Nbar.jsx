import React from 'react';
import NavCSS from './Nbar.module.css'
import cartSVG from "./cart.svg";


export default function Nbar({cart}) {

  const cartCopy = [...cart];

  return (
    <div className={NavCSS.bar}>
      <div className="home">
        <button className={NavCSS.logo}>Home Button</button>
        <button className={NavCSS.browseBtn}>Men&apos;s Clothing</button>
      </div>
      <div className={NavCSS.userButtons}>
        <button className={NavCSS.cart}>
          <img src={cartSVG} />
          {cartCopy.length}
        </button>
      </div>
    </div>
  )
}
