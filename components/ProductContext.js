import React, { createContext, useState, useContext } from 'react'

const ProductContext = createContext()

export const useProduct = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState('beije Ped')
  const [packageInputs, setPackageInputs] = useState({})
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleProductClick = (productName) => {
    setSelectedProduct(productName)
  }

  const handleSliderChange = (title, value) => {
    setPackageInputs({
      ...packageInputs,
      [title]: value,
    })
  }

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        packageInputs,
        isButtonClicked,
        totalPrice,
        setSelectedProduct,
        setPackageInputs,
        setIsButtonClicked,
        setTotalPrice,
        handleProductClick,
        handleSliderChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
