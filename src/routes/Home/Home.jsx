import React from 'react'
import Card from './components/Card/Card'
import artists from '../../data/cards-mocked'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      {artists.map((artist, index) => {
        return <Card key={index} data={artist} />
      })}
    </div>
  )
}

export default Home
