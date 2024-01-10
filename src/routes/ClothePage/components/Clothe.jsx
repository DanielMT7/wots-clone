import React from 'react'
import { useParams } from 'react-router-dom'

import artists from '../../../data/cards-mocked'
import ErrorPage from '../../ErrorPage/ErrorPage'

import './Clothe.css'

function Clothe() {
  const { id } = useParams()

  function getItemFromMock(id) {
    for (const artist of artists) {
      const foundClothe = artist.clothes.find(clothe => clothe.id == id)
      if (foundClothe) {
        return foundClothe
      }
    }
    return null
  }

  const item = getItemFromMock(id)

  if (!item) {
    return <ErrorPage errorMessage={'Roupa não encontrada'} />
  }

  const { brand, clotheName, image, price, buyAt } = item

  function formatSiteName(url) {
    const regex = /www\.(.*?)\.com/
    const match = url.match(regex)

    if (match && match[1]) {
      return match[1].charAt(0).toUpperCase() + match[1].slice(1)
    } else {
      return null
    }
  }

  function handleClickBuy(buyAt) {
    window.open(buyAt, '_blank')
  }

  return (
    <div className="clothe">
      <div className="clothe-card-container">
        <div className="clothe-card-container-image">
          <img src={image} alt="" />
        </div>

        <div className="clothe-card-container-all-info">
          <div className="clothe-card-container-info">
            <div className="">
              <h1>{brand}</h1>
              <h2>{clotheName}</h2>
            </div>
          </div>
          <div className="clothe-card-container-price-info">
            <div>
              ${price}{' '}
              {buyAt ? <span>{`from ${formatSiteName(buyAt)}`}</span> : null}
            </div>
            <div className="button-container">
              {buyAt ? (
                <button
                  className="price-button"
                  onClick={() => handleClickBuy(buyAt)}
                >
                  BUY AT {formatSiteName(buyAt).toUpperCase()}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clothe
