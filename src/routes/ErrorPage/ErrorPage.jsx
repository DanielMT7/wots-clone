import React from 'react'
import styles from './ErrorPage.module.css'
import errorImage from '../../assets/images/utils/errorImage.png'
import Navbar from '../../components/Navbar/Navbar'

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className={styles.error}>
        <img src={errorImage} alt="Error 404" />
      </div>
    </>
  )
}

export default ErrorPage
