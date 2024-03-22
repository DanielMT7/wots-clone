import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ClotheCardList.module.css'

import arrow from '../../../../assets/images/arrow.png'

function ClotheCardList({ id, image, brand, clotheName, price }) {
  return (
    <div className={styles.clothes_container}>
      <div className={styles.clothe_image_container}>
        <img src={image} alt="" />
      </div>

      <div className={styles.clothe_info_container}>
        <div className={styles.brand_name_container}>
          <h1>{brand}</h1>
        </div>

        <div className={styles.clothe_name_container}>
          <h2>{clotheName}</h2>
        </div>

        <div className={styles.price_container}>
          <span>R${price}</span>
        </div>
      </div>

      <div className={styles.arrow_container}>
        <Link to={`/item/${id}`}>
          <img src={arrow} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default ClotheCardList
