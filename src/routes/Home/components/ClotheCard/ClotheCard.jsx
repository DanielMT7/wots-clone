import React from 'react'
import { Link } from 'react-router-dom'
import './ClotheCard.css'

import arrow from '../../../../assets/images/arrow.png'

function ClotheCard({ id, image, brand, clotheName, price }) {
  return (
    <div className="clothes-container">
      <div className="clothe-image-container">
        <img src={image} alt="" />
      </div>

      <div className="clothe-info-container">
        <div className="brand-name-container">
          <h1>{brand}</h1>
        </div>

        <div className="clothe-name-container">
          <h2>{clotheName}</h2>
        </div>

        <div className="price-container">
          <span>R${price}</span>
        </div>
      </div>

      <div className="arrow-container">
        <Link to={`item/${id}`}>    
          <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default ClotheCard
