import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(()=>
      setIsLoading(false))
  }, [id]);

if(isLoading)
return <Loader/>

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;

