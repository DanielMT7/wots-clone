import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Clothe from './routes/ClothePage/components/Clothe.jsx'
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx'
import Artist from './routes/ArtistPage/components/Artist.jsx'
import CardList from './routes/Home/CardList.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <CardList />
      },
      // nested routes
      {
        path: '/item/:id',
        element: <Clothe />
      },

      {
        path: '/artist/:id',
        element: <Artist />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
