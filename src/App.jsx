import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app_container}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
