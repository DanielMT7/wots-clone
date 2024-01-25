import React, { useState } from 'react'

import styles from './Slider.module.css'

import arrow from '../../assets/images/arrow.png'

// Seria interessante usar uma lib externa como o SWIPER para criar o slider de imagens mais robustos e com animações.

function Slider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const length = images.length

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
    return images.map((_, index) => (
      <div
        key={index}
        className={`${styles.image_bullet} ${
          index === currentImageIndex ? styles.active_bullet : ''
        }`}
        onClick={() => setCurrentImageIndex(index)}
      ></div>
    ))
  }

  return (
    <div>
      <img
        className={styles.main_image}
        src={images?.[currentImageIndex]}
        alt="outfit image"
      />
      {length > 1 ? (
        <>
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
        </>
      ) : null}
    </div>
  )
}

export default Slider
