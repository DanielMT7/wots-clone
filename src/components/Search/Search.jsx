import React from 'react'

import arrow from '../../assets/images/arrow.png'
import search from '../../assets/images/search.svg'

import styles from './Search.module.css'

import artists from '../../data/cards-mocked'

function Search() {
  const handleRedirect = () => {
    console.log('daniel lindao')
  }

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <label htmlFor="search">
          <img src={search} alt="" />
        </label>
        <input
          type="text"
          id="search"
          className={styles.input}
          placeholder="Search"
        />
      </div>

      <h3 className={styles.search_popular}>Most Popular</h3>

      {artists.map((artists, key) => {
        return (
          <div
            className={styles.artists_list}
            onClick={handleRedirect}
            key={key}
          >
            <img src={artists.profileImage} alt="" />
            <h3>{artists.nickName}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Search
