import React, { useRef } from 'react'

import styles from './Carousel.module.css'

import arrow from '../../assets/images/arrow.png'

function Carousel({ data }) {
  const { clothes } = data
  const carousel = useRef(null)

  const handleLeftClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = e => {
    e.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  console.log(clothes)

  return (
    <div className={styles.container_carousel}>
      <button className={styles.leftArrow} onClick={handleLeftClick}>
        <img src={arrow} alt="" />
      </button>
      <div className={styles.carousel} ref={carousel}>
        {clothes.map((clothe, id) => {
          const { image, price, brand } = clothe
          return (
            <div key={id} className={styles.info}>
              <img className={styles.item} src={image} />
              <h1>{brand}</h1>
              <span>R${price}</span>
            </div>
          )
        })}
      </div>
      <button className={styles.rightArrow} onClick={handleRightClick}>
        <img src={arrow} alt="" />
      </button>
    </div>
  )
}

export default Carousel
