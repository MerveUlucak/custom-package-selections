import React from 'react'
import './packageList.css'

const PackageList = ({ title, price }) => {
  return (
    <div className="package-list">
      <h3>{title}</h3>
    </div>
  )
}

export default PackageList
