import React from 'react'
import styles from './Card.module.css'
import heart from '../../../../assets/images/coracao.png'
import ClotheCard from '../ClotheCard/ClotheCard'

function Card({ data }) {
  // get data from mocked object
  const { outfitImage, profileImage, nickName, date, clothes } = data

  // Sum price values on clothes object
  let sum = clothes.reduce((accumulator, object) => {
    return accumulator + object.price
  }, 0)

  return (
    <div className={styles.card_container}>
      <div className={styles.card_image_container}>
        <img src={outfitImage} alt="" />
      </div>

      <div className={styles.profile_container}>
        <div className={styles.info_profile_container}>
          <div className={styles.image_profile_container}>
            <img src={profileImage} alt="" />
          </div>

          <div className={styles.more_info_profile_container}>
            <div className={styles.name_date_profile_container}>
              <h1>{nickName}</h1>
              <h2>{date}</h2>
            </div>

            <div className={styles.heartIcon}>
              <img src={heart} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.all_clothes_container}>
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
          <div className={styles.full_clothes_price}>
            <h1>Total:</h1>
            <span>R${sum}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
