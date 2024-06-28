import React from 'react'
import { useCart } from './CartContext'
import { BsRepeat } from 'react-icons/bs'
import './Basket.css'

const Basket = ({
  totalPrice,
  calculateTotalPrice,
  packageInputs,
  setPackageInputs,
  setTotalPrice,
}) => {
  const { addToCart, removeFromCart } = useCart()

  const handleAddToCart = () => {
    const itemsToAdd = calculateTotalPrice()
    addToCart(itemsToAdd)
  }

  const handleRemoveFromCart = () => {
    const itemsToRemove = Object.keys(packageInputs).map((key) => key)
    removeFromCart(itemsToRemove)
    setPackageInputs({})
    setTotalPrice(0)
  }

  return (
    <div className="basket-container">
      <span className="special-package">Özel Paketin</span>
      <div className="special-package-span">
        <div className="custom-icon">
          <BsRepeat />
          <span>2 ayda 1 gönderim</span>
        </div>
        <img
          alt="packet Image"
          className="basket-image"
          src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.2a59f7aa.png&w=828&q=75"
        />
      </div>
      {totalPrice > 0 && (
        <button
          onClick={handleRemoveFromCart}
          className="remove-from-cart-button"
        >
          Paketten Çıkar
        </button>
      )}
      <button
        onClick={handleAddToCart}
        className="add-to-cart-button"
        style={{
          backgroundColor:
            totalPrice > 0 ? 'rgba(0, 0, 0, 0.9)' : 'rgb(249, 245, 242)',
          color: totalPrice > 0 ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.9)',
          alignSelf: 'flex-end', // Button'u en alt ortaya getirmek için
        }}
      >
        Sepete Ekle {totalPrice > 0 && `₺(${totalPrice.toFixed(2)})`}
      </button>
    </div>
  )
}

export default Basket
