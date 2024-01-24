import React from 'react'
import Card from './components/Card/Card'
import artists from '../../data/cards-mocked'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home_container}>
      {artists.map((artist, index) => {
        return <Card key={index} data={artist} />
      })}
    </div>
  )
}

export default Home
