import React from 'react'
import './ErrorPage.css'

function ErrorPage({ errorMessage }) {
  return (
    <div className="error-page">
      <h1>{errorMessage ?? 'Error'}</h1>
    </div>
  )
}

export default ErrorPage
