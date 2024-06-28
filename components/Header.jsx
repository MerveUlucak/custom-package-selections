import React, { useState } from 'react'
import { SlBasket } from 'react-icons/sl'
import './packageList.css'
import { IoMdMenu } from 'react-icons/io'
import './header.css'
import '../app/globals.css'
import { useCart } from './CartContext'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useCart()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <div className="header">
        <div className="header-beije">
          <h1>beije.</h1>
        </div>
        <nav>
          <ul className={`header-sections ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href="#urunler">Ürünler</a>
            </li>
            <li>
              <a href="#bizkimiz">Biz Kimiz?</a>
            </li>
            <li>
              <a href="#bagiskulturu">Bağış Kültürü</a>
            </li>
            <li>
              <a href="#regltesti">Regl Testi!</a>
            </li>
            <li>
              <a href="#kendipaketiniolustur">Kendi Paketini Oluştur</a>
            </li>
          </ul>
        </nav>
        <div className="header-icons">
          <div style={{ position: 'relative' }}>
            <SlBasket size={24} style={{ marginRight: '20px' }} />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </div>
          <img
            src="/images/login.png"
            alt="login"
            style={{ width: '24px', height: '24px', marginRight: '20px' }}
          />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <IoMdMenu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header
