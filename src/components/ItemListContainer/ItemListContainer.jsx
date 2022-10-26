import React, { useState, useEffect } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";
import getItemsFromAPI from "../../mockService/mockService";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([])

  useEffect(
    () => {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB)
      })
    }, []);
    
  return (
    <div>
      <FlexWrapper>
        {
          productsList.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              title={product.title}
              detail={product.detail}
              price={product.price}
              imgurl={product.imgurl}
              stock={product.stock}
              category={product.category}
            />
          ))
        }
      </FlexWrapper>
    </div>
  );
}


export default ItemListContainer;
