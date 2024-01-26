import React, { useState, useEffect } from 'react'

import ClotheCardList from '../ClotheCardList/ClotheCardList'
import Slider from '../../../../components/Slider/Slider'

import styles from './Card.module.css'

import heart from '../../../../assets/images/coracao.png'
import Carousel from '../../../../components/Carousel/Carousel'

function Card({ data }) {
  const { outfitImage, profileImage, nickName, date, clothes } = data
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600)

  let sum = clothes.reduce((accumulator, object) => {
    return accumulator + object.price
  }, 0)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.card_container}>
      <div className={styles.card_image_container}>
        <Slider images={outfitImage} />
      </div>

      {isSmallScreen ? (
        <>
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
          <div className={styles.container_carousel}>
            <Carousel data={data} />
          </div>
        </>
      ) : (
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
                <ClotheCardList
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
      )}
    </div>
  )
}

export default Card
