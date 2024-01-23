import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import search from '../../assets/images/search.svg'
import menu from '../../assets/images/menu.png'

function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <ul>
        <li>
          <img src={menu} alt="" />
        </li>
        <li>
          <Link to="/">
            <h1>WHAT'S ON THE STAR?</h1>
          </Link>
        </li>
        <li>
          <img src={search} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
