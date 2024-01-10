import React from 'react'
import './Card.css'
import heart from '../../../../assets/images/coracao.png'
import ClotheCard from '../ClotheCard/ClotheCard'

function Card({ data }) {
  // get data from mocked object
  const { outfitImage, profileImage, nickName, date, clothes} = data

  // Sum price values on clothes object
  let sum = clothes.reduce((accumulator, object) => {
    return accumulator + object.price
  }, 0)

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={outfitImage} alt="" />
      </div>

      <div className="profile-container">
        <div className="info-profile-container">
          <div className="image-profile-container">
            <img src={profileImage} alt="" />
          </div>

          <div className="more-info-profile-container">
            <div className="name-date-profile-container">
              <h1>{nickName}</h1>
              <h2>{date}</h2>
            </div>

            <div className="heartIcon">
              <img src={heart} alt="" />
            </div>
          </div>
        </div>

        <div className="all-clothes-container">
          {clothes.map((clothe, index) => {
            return (
              <ClotheCard
                key={index}
                id={clothe.id}
                image={clothe.image}
                brand={clothe.brand}
                clotheName={clothe.clotheName}
                price={clothe.price}
              />
            )
          })}
          <div className="full-clothes-price">
            <h1>Total:</h1>
            <span>R${sum}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
