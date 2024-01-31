import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import search from '../../assets/images/search.svg'
import menu from '../../assets/images/menu.png'
import Menu from '../Menu/Menu'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar_container}>
      <ul className={styles.navbar_list}>
        <li>
          {isMenuOpen ? (
            <button className={styles.menu_button} onClick={handleCloseMenu}>
              <img src={menu} alt="Menu" />
            </button>
          ) : (
            <button className={styles.menu_button} onClick={handleOpenMenu}>
              <img src={menu} alt="Menu" />
            </button>
          )}
        </li>
        <li>
          <Link to="/">
            <h1>WHAT'S ON THE STAR?</h1>
          </Link>
        </li>
        <li>
          <img src={search} alt="Barra de pesquisa" />
        </li>
      </ul>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={handleCloseMenu}></div>
      )}
      {isMenuOpen && <Menu />}
    </nav>
  )
}

export default Navbar
