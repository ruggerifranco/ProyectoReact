import React from "react";
import { Link } from "react-router-dom";
import "./item.css";
import CartWidget from "../CartWidget/CartWidget";

function Item({ product }) {

let urlDetail = `/detalle/${product.id}`;

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.thumbnail} alt="imagen"/>
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Link to={urlDetail}>
        <button>Ver más!</button>
      </Link>
      <br />
      <button><CartWidget/></button>
    </div>
  );
}

export default Item;


