import React from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../../ErrorPage/ErrorPage'
import CardList from '../../Home/CardList'

import artists from '../../../data/cards-mocked'

import styles from './Artist.module.css'

function Artist() {
  const { id } = useParams()

  function getArtistFromMock(id) {
    const artistCollection = artists.filter(artist => artist.id_name == id)

    if (artistCollection.length > 0) return artistCollection

    return null
  }

  const artist = getArtistFromMock(id)

  if (!artist) {
    return <ErrorPage />
  }

  return (
    <div className={styles.Artist_container}>
      <CardList renderList={artist} />
    </div>
  )
}

export default Artist
