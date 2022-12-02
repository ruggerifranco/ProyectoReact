import React, { useState } from "react";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart, text }) {
  const [quantity, setCount] = useState(1);

  function handleAdd(evt) {
    console.log(evt);
    if (quantity < stock) setCount(quantity + 1);
  }

  function handleSubstract(evt) {
    console.log(evt);
    if (quantity > 1) setCount(quantity - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <button onClick={handleSubstract}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="itemcount_btns">
        <button type="alert" onClick={() => onAddToCart(quantity)}>
          {text}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
