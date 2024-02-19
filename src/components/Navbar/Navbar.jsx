import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import search from '../../assets/images/search.svg'
import menu from '../../assets/images/menu.png'
import Menu from '../Menu/Menu'
import Search from '../Search/Search'

function Navbar() {
  // Sinto que estou repetindo muito código aqui, preciso procurar uma maneira de otimizar esse código
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  const handleOpenSearchBar = () => {
    setIsSearchBarOpen(true)
  }

  const handleCloseSearchBar = () => {
    setIsSearchBarOpen(false)
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
          {isSearchBarOpen ? (
            <button
              className={styles.menu_button}
              onClick={handleCloseSearchBar}
            >
              <img src={search} alt="" />
            </button>
          ) : (
            <button
              className={styles.menu_button}
              onClick={handleOpenSearchBar}
            >
              <img src={search} alt="" />
            </button>
          )}
        </li>
      </ul>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={handleCloseMenu}></div>
      )}
      {isMenuOpen && <Menu />}

      {isSearchBarOpen && (
        <div className={styles.overlay} onClick={handleCloseSearchBar}></div>
      )}
      {isSearchBarOpen && <Search />}
    </nav>
  )
}

export default Navbar
