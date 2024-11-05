import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import storeItems from '../data/item.json'

type CartItemProps = {
    id: number,
    quantity: number,
    name: string,
    price: number,
    description: string,
    date: string
}

const CartItem = ({id, quantity} : CartItemProps) => {
    // const { removeItem } = useShoppingCart;
    const { removeItem } = useContext(ShoppingCartContext);
    const item = storeItems.find(i => i.id === id); 
    if (item === null) return null;

  return (
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        {item.name}
        <span className="badge badge-sm">{quantity}</span>
      </a>
      <button className="btn btn-ghost" onClick={removeItem}>x</button>
    </li>
  )
}

export default CartItem