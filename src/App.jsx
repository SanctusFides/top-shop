import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import Nbar from './Components/Nbar/Nbar'

function App() {

  
  const [cart, setCart] = useState([]);

  function handleAddToCart(newItem) {
    setCart([...cart, newItem]);
  }

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
     <Nbar cart={cart}/>
     <HomePage handleAddToCart={handleAddToCart}/>
     <button onClick={printCart}>PRINT</button>
    </>
  )
}

export default App
