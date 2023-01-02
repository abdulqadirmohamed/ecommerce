import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CounterContextProvider = ({children}) =>{
    const [items, setItems] = useState([])
  
    useEffect(()=>{
      const getDates = async() =>{
          const response = await fetch('https://fakestoreapi.com/products?limit=3');
          const data = await response.json();
          setItems(data)
      }
      getDates()
      console.log(items)
      },[])

    const addToCart = (title, price) =>{
        setItems((prevState)=>[...prevState, {title, price}])
    }
    return(
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}