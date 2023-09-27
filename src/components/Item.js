import React, { useState } from "react";

function Item({ name, category }) {
  const [ isInCart, setIsInCart ] = useState(false)
    const addToCart = (e) => {
    if (isInCart) {
      setIsInCart(false)
    } else {
      setIsInCart(true)
    }
  }
  return (
    <li className={ isInCart? "in-cart": "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
