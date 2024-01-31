import React from 'react'
import styles from './Menu.module.css'
import arrow from '../../assets/images/arrow.png'

function Menu() {
  const discoverLabels = ['Outfits', 'Videos', 'Artists', 'Articles']
  const shopLabels = ['Catalog', 'Brands', 'Sale']
  return (
    <div className={styles.menu_container}>
      <div className={styles.login}>
        <span>
          Registered users can save outfits and add items to their wishlist
        </span>
        <button>Sign In</button>
      </div>
      <div className={styles.header_menu}>
        <span>DISCOVER</span>
        <ul>
          {discoverLabels.map((label, index) => {
            return (
              <li key={index}>
                {label}
                <img src={arrow} alt="arrow" />
              </li>
            )
          })}
        </ul>
        <span>SHOP</span>
        <ul>
          {shopLabels.map((label, index) => {
            return (
              <li key={index}>
                {label}
                <img src={arrow} alt="arrow" />
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.about}>
        <span>Follow on </span>
        <span>
          <a href="https://www.linkedin.com/in/danielsmotta/">Linkdin</a>,{' '}
          <a href="https://www.linkedin.com/in/danielsmotta/">Github</a>
        </span>
        <h2>© What's on The Star, cloned by Daniel Motta</h2>
      </div>
    </div>
  )
}

export default Menu
