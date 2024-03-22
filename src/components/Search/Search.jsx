import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Search.module.css'
import searchIcon from '../../assets/images/search.svg'
import artists from '../../data/cards-mocked'

function Search({ handleCloseMenu }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredArtists = artists.filter(artist =>
    artist.nickName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <label htmlFor="search">
          <img src={searchIcon} alt="" />
        </label>
        <input
          type="text"
          id="search"
          className={styles.input}
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {searchTerm ? (
        filteredArtists.length ? (
          <>
            <h3 className={styles.search_term}>Search Results</h3>
            {filteredArtists.map((artist, key) => (
              <Link
                to={`artist/${artist.id_name}`}
                key={key}
                onClick={handleCloseMenu}
              >
                <div className={styles.artists_list}>
                  <img src={artist.profileImage} alt="" />
                  <h3>{artist.nickName}</h3>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <h3 className={styles.search_term}>Not Found</h3>
        )
      ) : (
        <>
          <h3 className={styles.search_term}>Most Popular</h3>
          {artists.map((artist, key) => (
            <Link
              to={`artist/${artist.id_name}`}
              key={key}
              onClick={handleCloseMenu}
            >
              <div className={styles.artists_list}>
                <img src={artist.profileImage} alt="" />
                <h3>{artist.nickName}</h3>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  )
}

export default Search
