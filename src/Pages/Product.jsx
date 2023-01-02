import React, { useContext, useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import { CartContext } from "../context/CounterContext";

const Product = () => {
  const {items} = useContext(CartContext)

  return <div className="w-[80%] mx-auto grid grid-cols-4 gap-4">
    {items.map((product)=>{
        return(
            <div className="" key={product.id}>
            <ProductItems  image={product.image} title={product.title} price={product.price}/>
            </div>
        )
    })}
  </div>;
};

export default Product;
