import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import cartContext from "../../storage/CartContext";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  

  const { addToCart } = useContext(cartContext);


  const navigate = useNavigate();

  function onAddToCart(quantity) {
    Swal.fire({
      title: "Item Agregado al Carrito",
      text: "¿Deseas ir al carrito?",
      icon: "success",
      confirmButtonText: "Ir al carrito",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });

    const itemForCart = {
      ...product,
      quantity,
    }

    addToCart(itemForCart)

    setIsInCart(true);
  }

  return (
    <div className="card-detail">
      <div className="card-img">
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
          stock={product.stock}
        />
      ) : (
        <div>
          <Link to="/cart">
          <button>Ir al Carrito</button>
          </Link>
          <button>Volver al Catálogo</button>
          <button>Quitar del Carrito</button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
