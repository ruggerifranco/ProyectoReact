import React, { useState, useEffect} from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import { useParams } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let params = useParams();
    let id = params.id;
  

    useEffect(() => {
        getSingleItemFromAPI(id)
        .then((itemDB) => {
            setProduct(itemDB);
        });
    },[id]);

    return (
        <div className="card">
        <div className="card-img">
          <img src={product.thumbnail} alt="{product.title}"/>
        </div>
        <div className="card-detail">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4 className="priceTag">$ {product.price}</h4>
        </div>
        <button><CartWidget/></button>
      </div>
    )
    
}

export default ItemDetailContainer;