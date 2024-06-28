'use client'
import React from 'react'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'
import { CartProvider } from './CartContext'

const Layout = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <main>
          <Product />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default Layout
