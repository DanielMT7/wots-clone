import React, { useState } from 'react'
import styles from './Card.module.css'
import heart from '../../../../assets/images/coracao.png'
import ClotheCard from '../ClotheCard/ClotheCard'
import arrow from '../../../../assets/images/arrow.png'

function Card({ data }) {
  // Seria interessante usar uma lib externa como o SWIPER para criar o slider de imagens.
  // Seria interessante também fazer isso em um componente novo e reutilizar em outros lugares.
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { outfitImage, profileImage, nickName, date, clothes } = data
  const length = outfitImage.length

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex < length - 1 ? currentImageIndex + 1 : currentImageIndex
    )
  }

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      currentImageIndex > 0 ? currentImageIndex - 1 : currentImageIndex
    )
  }

  const pagination = () => {
    return outfitImage.map((_, index) => (
      <div
        key={index}
        className={`${styles.image_bullet} ${
          index === currentImageIndex ? styles.active_bullet : ''
        }`}
        onClick={() => setCurrentImageIndex(index)}
      ></div>
    ))
  }

  let sum = clothes.reduce((accumulator, object) => {
    return accumulator + object.price
  }, 0)

  return (
    <div className={styles.card_container}>
      <div className={styles.card_image_container}>
        <img
          className={styles.main_image}
          src={outfitImage?.[currentImageIndex]}
          alt="outfit image"
        />
        <div className={styles.image_bullets}>{pagination()}</div>
        <img
          className={`${styles.arrow} ${styles.previous_arrow}`}
          src={arrow}
          alt="left arrow"
          onClick={handlePreviousImage}
        />
        <img
          className={`${styles.arrow} ${styles.next_arrow}`}
          src={arrow}
          alt="right arrow"
          onClick={handleNextImage}
        />
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
