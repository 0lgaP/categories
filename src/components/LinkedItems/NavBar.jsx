import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

// Link takes an onClick
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul >
        <li><Link to="/categories">Home</Link></li>
        <li><Link to="/draw">Draw</Link></li>
        <li><Link to="/settings">Settigns</Link></li>
      </ul>
      </nav>
  )
}

export default NavBar