import React from 'react'
import { useCart } from './CartContext'
import './Product.css'

const Cart = () => {
  const { cartItems } = useCart()

  return (
    <div className="cart">
      <h2>Sepet</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title}: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
