import React from "react";
import { Link } from "react-router-dom";
import "./item.css";
// import CartWidget from "../CartWidget/CartWidget";
// import ItemCount from "../ItemCount/ItemCount";



function Item({ product }) {

let urlDetail = `/detalle/${product.id}`;

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.thumbnail} alt={product.title}/>
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Link to={urlDetail}>
        <button>Ver más!</button>
      </Link>
    </div>
  );
}

export default Item;


