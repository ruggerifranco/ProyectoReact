import React from "react";
import "./item.css";
import CartWidget from "../CartWidget/CartWidget";

function Item(props) {

  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt="{props.title}"/>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 className="priceTag">$ {props.price}</h4>
      </div>
      <button><CartWidget/></button>
    </div>
  );
}

export default Item;


