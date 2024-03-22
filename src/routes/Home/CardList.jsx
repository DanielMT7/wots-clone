import React from 'react'

import Card from './components/Card/Card'

import artists from '../../data/cards-mocked'

import styles from './CardList.module.css'

function CardList({ renderList }) {
  return (
    <div className={styles.card_list_container}>
      {renderList
        ? renderList.map((artist, index) => {
            return <Card key={index} data={artist} />
          })
        : artists.map((artist, index) => {
            return <Card key={index} data={artist} />
          })}
    </div>
  )
}

export default CardList
