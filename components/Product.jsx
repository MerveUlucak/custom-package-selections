'use client'
import React, { useState, useEffect } from 'react'
import PackageList from './PackageList'
import Basket from './Basket'
import './Product.css'
import './packageList.css'

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [packageInputs, setPackageInputs] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    handleProductClick('beije Ped')
  }, [])

  const handleProductClick = (productName) => {
    setSelectedProduct(productName)
  }

  const handleSliderChange = (title, event) => {
    setPackageInputs({
      ...packageInputs,
      [title]: event.target.value,
    })
  }

  const getPriceForProduct = (title) => {
    const prices = {
      'Standart Ped': 6.084,
      'Süper Ped': 7.14,
      'Süper+ Ped': 8.003,
      'Günlük Ped': 3.759,
      'Süper Günlük Ped': 4.323,
      'Mini Tampon': 7.874,
      'Standart Tampon': 8.488,
      'Süper Tampon': 8.974,
    }
    return prices[title] || 0
  }
  const calculateTotalPrice = () => {
    const itemsToAdd = Object.keys(packageInputs).map((key) => ({
      title: key,
      quantity: packageInputs[key],
      price: getPriceForProduct(key) * packageInputs[key],
    }))
    const total = itemsToAdd.reduce((sum, item) => sum + item.price, 0)
    setTotalPrice(total)
    return itemsToAdd
  }

  return (
    <div className="products-container">
      <div className="products">
        <div className="packed">
          <h1>Kendi Paketini Oluştur</h1>
          <h4>Nasıl Çalışır?</h4>
        </div>
        <span>
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          miktarlardan, sana özel bir paket oluşturalım.
        </span>
        <div className="product-buttons">
          <button
            className={`beije-ped ${
              selectedProduct === 'beije Ped' ? 'active' : ''
            }`}
            onClick={() => handleProductClick('beije Ped')}
          >
            beije Ped
          </button>
          <button
            className={selectedProduct === 'beije Günlük Ped' ? 'active' : ''}
            onClick={() => handleProductClick('beije Günlük Ped')}
          >
            beije Günlük Ped
          </button>
          <button
            className={selectedProduct === 'beije Tampon' ? 'active' : ''}
            onClick={() => handleProductClick('beije Tampon')}
          >
            beije Tampon
          </button>
        </div>

        {selectedProduct && (
          <div className="product-tabs">
            {selectedProduct === 'beije Ped' && (
              <div className="tab-content">
                <PackageList title="Standart Ped" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Standart Ped'] || 0}
                      onChange={(e) => handleSliderChange('Standart Ped', e)}
                      className="slider"
                    />
                    {packageInputs['Standart Ped'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Standart Ped'] || 0) / 60) * 100
                          }%`,
                        }}
                      >
                        {packageInputs['Standart Ped']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
                <PackageList title="Süper Ped" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Süper Ped'] || 0}
                      onChange={(e) => handleSliderChange('Süper Ped', e)}
                      className="slider"
                    />
                    {packageInputs['Süper Ped'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Süper Ped'] || 0) / 60) * 100
                          }%`,
                        }}
                      >
                        {packageInputs['Süper Ped']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
                <PackageList title="Süper+ Ped" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Süper+ Ped'] || 0}
                      onChange={(e) => handleSliderChange('Süper+ Ped', e)}
                      className="slider"
                    />
                    {packageInputs['Süper+ Ped'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Süper+ Ped'] || 0) / 60) * 100
                          }%`,
                        }}
                      >
                        {packageInputs['Süper+ Ped']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
              </div>
            )}
            {selectedProduct === 'beije Günlük Ped' && (
              <div className="tab-content">
                <PackageList title="Günlük Ped" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Günlük Ped'] || 0}
                      onChange={(e) => handleSliderChange('Günlük Ped', e)}
                      className="slider"
                    />
                    {packageInputs['Günlük Ped'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Günlük Ped'] || 0) / 60) * 100
                          }%`,
                        }}
                      >
                        {packageInputs['Günlük Ped']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
                <PackageList title="Süper Günlük Ped" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Süper Günlük Ped'] || 0}
                      onChange={(e) =>
                        handleSliderChange('Süper Günlük Ped', e)
                      }
                      className="slider"
                    />
                    {packageInputs['Süper Günlük Ped'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Süper Günlük Ped'] || 0) / 60) *
                            100
                          }%`,
                        }}
                      >
                        {packageInputs['Süper Günlük Ped']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
              </div>
            )}
            {selectedProduct === 'beije Tampon' && (
              <div className="tab-content">
                <PackageList title="Mini Tampon" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Mini Tampon'] || 0}
                      onChange={(e) => handleSliderChange('Mini Tampon', e)}
                      className="slider"
                    />
                    {packageInputs['Mini Tampon'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Mini Tampon'] || 0) / 60) * 100
                          }%`,
                        }}
                      >
                        {packageInputs['Mini Tampon']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
                <PackageList title="Standart Tampon" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Standart Tampon'] || 0}
                      onChange={(e) => handleSliderChange('Standart Tampon', e)}
                      className="slider"
                    />
                    {packageInputs['Standart Tampon'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Standart Tampon'] || 0) / 60) * 100
                          }%`,
                        }}
                      >
                        {packageInputs['Standart Tampon']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
                <PackageList title="Süper Tampon" />
                <div className="slider-container">
                  <span className="min-value">0</span>
                  <div className="slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="60"
                      step="10"
                      value={packageInputs['Süper Tampon'] || 0}
                      onChange={(e) => handleSliderChange('Süper Tampon', e)}
                      className="slider"
                    />
                    {packageInputs['Süper Tampon'] > 0 && (
                      <span
                        className="slider-value"
                        style={{
                          left: `${
                            ((packageInputs['Süper Tampon'] || 0) / 60) * 100
                          }%`,
                        }}
                      >
                        {packageInputs['Süper Tampon']}
                      </span>
                    )}
                  </div>
                  <span className="max-value">60</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Basket
        totalPrice={totalPrice}
        calculateTotalPrice={calculateTotalPrice}
        packageInputs={packageInputs}
        setPackageInputs={setPackageInputs}
        setTotalPrice={setTotalPrice}
      />
    </div>
  )
}

export default Product
