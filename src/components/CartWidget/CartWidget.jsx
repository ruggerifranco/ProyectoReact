import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {

  const { totalItemsInCart } = useContext(cartContext);


  return (

    <div>
      <Link class="bi bi-cart" to="/cart">
        {
          totalItemsInCart() > 0 ?
            <span>{totalItemsInCart()}</span> :
            <></>
        }</Link>
    </div>
  )
}

export default CartWidget;
