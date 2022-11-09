import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";

function CartWidget() {

  const { totalItemsInCart } = useContext(cartContext);


  return (

    <div>
      <i class="bi bi-cart-plus">{totalItemsInCart()}</i>
    </div>
)
}

export default CartWidget;
 