import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CounterContext";

const Checkout = () => {
  const { items } = useContext(CartContext);

  return (
    <div className="w-[75%] mx-auto">
        {items.map((product)=>{
            return(

      <div className="my-4" key={product.id}>
        {/* <img className='w-32' src={image} alt="" /> */}
        <div>
          <h1>{product.title}</h1>
          <h1>${product.price}</h1>
          <button className="px-2 bg-red-500">Remove</button>
        </div>
        <hr />
      </div>
            )
        })}
    </div>
  );
};

export default Checkout;
