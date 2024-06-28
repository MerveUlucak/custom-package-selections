// CartContext.js
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (items) => {
    setCart([...cart, ...items])
  }

  const removeFromCart = (itemsToRemove) => {
    const updatedCart = cart.filter(
      (item) => !itemsToRemove.includes(item.title)
    )
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
