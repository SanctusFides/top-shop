// import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage/HomePage'

function App({cart, handleAddToCart}) {

  // This is for testing the cart
  const printCart = async () => {
    if(cart.length === 0) {
      console.log("Cart is empty");
    }
     for (let i = 0; i < cart.length; i++) {
      console.log(cart[i]);
    }
  }


  return (
    <>
     <HomePage cart={cart} handleAddToCart={handleAddToCart}/>
     <button onClick={printCart}>PRINT</button>
    </>
  )
}

export default App
