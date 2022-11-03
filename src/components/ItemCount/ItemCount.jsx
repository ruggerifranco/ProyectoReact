import React, { useState } from "react";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart, text }) {
  const [count, setCount] = useState(1);

  function handleAdd(evt) {
    console.log(evt);
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract(evt) {
    console.log(evt);
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <button color="#pink" onClick={handleSubstract}>
          -
        </button>
        <span>{count}</span>
        <button color="pink" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="itemcount_btns">
        <button onClick={() => onAddToCart(count)}>{text}</button>
      </div>
    </div>
  );
}

export default ItemCount;
