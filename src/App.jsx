// import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage/HomePage'

function App({cart, handleAddToCart}) {

  // This is for testing the cart
  // const printCart = async () => {
  //   if(cart.length === 0) {
  //     console.log("Cart is empty");
  //   }
  //    for (let i = 0; i < cart.length; i++) {
  //     console.log(cart[i]);
  //   }
  // }

  function truth() {
    alert(`I am only taking this course for the JS, not web design. 
    
I also became extremely sick during this assignment and am moving on now that this mostly functions fully. 

I wish I could have done more but need to keep moving forward now with my studies`)
  }


  return (
    <>
     <HomePage cart={cart} handleAddToCart={handleAddToCart}/>
     <button onClick={truth}>CLICK FOR THE TRUTH</button>
    </>
  )
}

export default App
