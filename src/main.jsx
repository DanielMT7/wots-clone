import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Clothe from './routes/ClothePage/components/Clothe.jsx'
import Home from './routes/Home/Home.jsx'
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx'
import styles from './main.module.css'

// 1 - Router Config
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      // nested routes
      {
        path: '/item/:id',
        element: <Clothe />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
