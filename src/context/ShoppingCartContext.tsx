import React, { createContext, useEffect } from 'react'
import { useState, useContext, ReactNode } from 'react'

type ShoppingCartProviderProps = {
  children: ReactNode //Type that you give to the children property inside of React
}

type ShoppingCartContext = {
  cartQuantity: number,
  cartItems: CartItem,
  addToCart: (id: number, quantity: number) => void,
  getItemQuantity: (id: number) => number, //These are all functions that accept id of an item and do shit based on it
  increaseCartQuantity: (id: number) => void, //Adding an item to a cart is the same thing as increasing quantity
  decreaseCartQuantity: (id: number) => void,
  removeItem: (id: number) => void,
  clearCart: (id: number) => void
}

type CartItem = {
  id: number, //all you need is ID, because with item ID you can fetch the rest of the info
  quantity: number
} 

export const ShoppingCartContext = createContext<ShoppingCartContext>({})

// export function useShoppingCart() {
//   return (
//     useContext(ShoppingCartContext)
//   )
// }

export function ShoppingCartProvider( {children}: ShoppingCartProviderProps ) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  // const cartQuantity = cartItems.length; This will not account for duplicates of the same item

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0 
  }

  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]);

  function addToCart(id: number, quantity: number) {
    // setCartItems([{id: id, quantity: quantity}]);
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) === undefined) {
        return [...currItems, {id, quantity}];
        // currItems.filter(item => item.quantity > 0);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: quantity};
          } else {
            return item;
          }
        })
      }
    })
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) === null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        // return [...currItems, {id, quantity: 0}]
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }
  
  function removeItem(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    }) 
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <ShoppingCartContext.Provider value={{ addToCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeItem, clearCart, cartItems, cartQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  ) 
}
