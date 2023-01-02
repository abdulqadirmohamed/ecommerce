import React, { useContext } from 'react'
import { CartContext } from '../context/CounterContext'

const ProductItems = ({image, price, title}) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div>
        <div className=''>
            <img className='w-32' src={image} alt="" />
            <div>
            <h1>{title}</h1>
            <h1>${price}</h1>

            </div>
            <button onClick={()=>addToCart(title, price)} className='bg-red-500 px-2 rounded hover:bg-black text-white'>Add Cart</button>
        </div>
    </div>
  )
}

export default ProductItems