import React, {useContext} from 'react'
import cartContext from "../../storage/CartContext";

function CartView() {
  const { cart, removeItem, clear } = useContext(cartContext);
  
  if(cart.length === 0) return <h1>Carrito Vacio</h1>

  return (
    <div>
      {
        cart.map( cartItem => (
          <div key={cartItem.id}>
          <img src={cartItem.thumbnail} alt={cartItem.title}/>
          <h3>{cartItem.title}</h3>
          <h4>Precio: ${cartItem.price}</h4>
          <h4>Cantidad: {cartItem.quantity}</h4>
          <h4>Precio a Pagar: {cartItem.price * cartItem.quantity}</h4>
          <button onClick={()=> removeItem(cartItem.id)} style={{backgroundColor: "red"}}>X</button>
          <br />
          <button onClick={clear} style={{backgroundColor: "red"}}>Vaciar Carrito </button>

          </div>
        )

        )
      }
    </div>
  )
}

export default CartView;