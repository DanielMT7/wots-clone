import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import search from '../../assets/images/search.svg'
import menu from '../../assets/images/menu.png'
import Menu from '../Menu/Menu'
import Search from '../Search/Search'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)

  const handleToggleMenu = menuType => {
    setOpenMenu(prevMenu => (prevMenu === menuType ? null : menuType))
  }

  const handleCloseMenu = () => {
    setOpenMenu(null)
  }

  const NavbarButton = ({ onClick, image, alt }) => {
    return (
      <button className={styles.menu_button} onClick={onClick}>
        <img src={image} alt={alt} />
      </button>
    )
  }

  return (
    <nav className={styles.navbar_container}>
      <ul className={styles.navbar_list}>
        <li>
          <NavbarButton
            onClick={() => handleToggleMenu('menu')}
            image={menu}
            alt="Menu"
          />
        </li>
        <li>
          <Link to="/">
            <h1>WHAT'S ON THE STAR?</h1>
          </Link>
        </li>
        <li>
          <NavbarButton
            onClick={() => handleToggleMenu('search')}
            image={search}
            alt=""
          />
        </li>
      </ul>

      {openMenu && (
        <div className={styles.overlay} onClick={handleCloseMenu}></div>
      )}

      {openMenu === 'menu' && <Menu />}
      {openMenu === 'search' && <Search />}
    </nav>
  )
}

export default Navbar
