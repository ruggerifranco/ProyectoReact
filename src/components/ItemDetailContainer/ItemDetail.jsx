import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom"
import Swal from 'sweetalert2'




function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);

  const { cart, addToCart } = useContext(cartContext);

  let itemInCart = cart.find((item) => product.id === item.id);
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.count;

  function onAddToCart(quantity) {

     Swal.fire({
       title: `Agregadas ${quantity} unidades al Carrito`,
       icon: "success",
       confirmButtonColor: "pink"
     })

    const itemForCart = {
      ...product,
      quantity,
    };

    addToCart(itemForCart);
    setIsInCart(true);
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={stock}
        />
      ) : (
        <div>
          <Link to="/cart">
            <button>Ir al Carrito</button>
          </Link>
          <Link to= "/">
          <button>Volver al catálogo</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
