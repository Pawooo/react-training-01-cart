import React, { useState, useContext } from 'react'
import { formatCurrency } from '../utilities/formatCurrency'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

type CardProps = {
  id: number,
  name: string,
  price: number,
  description: string,
  date: string
}

const Card = ({data}: CardProps) => {
  const [quantity, setQuantity] = useState(0);
  

  const { addToCart, clearCart } = useContext(ShoppingCartContext);

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.description} {data.date} {formatCurrency(data.price)}</p>
        <div className="card-actions justify-between">
          <div className='flex items-center gap-1'>
            <button className="btn btn-ghost justify-start" onClick={() => setQuantity(quantity + 1)}>+</button>
            <p>Quantity: {quantity}</p>
            <button className="btn btn-ghost justify-start" onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
          </div>
          <button className="btn btn-primary justify-end" onClick={() => addToCart(data.id, quantity)}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card