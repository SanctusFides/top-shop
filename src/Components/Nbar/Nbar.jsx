import React from 'react';
import NavCSS from './Nbar.module.css'
import cart from "./cart.svg";


export default function Nbar() {
  return (
    <div className={NavCSS.bar}>
      <div className="home">
        <button className={NavCSS.logo}>Home Button</button>
      </div>
      <div className={NavCSS.userButtons}>
        <button className={NavCSS.browseBtn}>Browse</button>
        <button className={NavCSS.cart}>
          <img src={cart} />
        </button>
      </div>
    </div>
  )
}
