import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import addItemToCart from "../addItemToCart";
import FrontPage from "./FrontPage";
import ShoppingPage from "./ShoppingPage";
import Checkout from "./Checkout";
import removeItemFromCart from "../removeFromCart";

function App() {

  const [ cart, setCart ] = useState([]);
  const [ itemAmount, setItemAmount ] = useState(0);

  function addToCart(item) {
    addItemToCart(cart, setCart, item, setItemAmount, itemAmount);
  }

  function removeFromCart(item) {
    removeItemFromCart(cart, setCart, item, setItemAmount, itemAmount);
    
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage itemAmount={itemAmount}/>} />
        <Route path="/shopping-page" element={<ShoppingPage addToCart={addToCart} itemAmount={itemAmount}/>}/>
        <Route path="/checkout" element={<Checkout cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} itemAmount={itemAmount}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
