import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
import {BsPencilFill, BsInfoCircleFill, BsFillGearFill} from "react-icons/bs"



// Link takes an onClick
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.icon_container}>
        <li><Link to="/categories" className={styles.icon}><AiFillHome /></Link></li>
        <li><Link to="/about" className={styles.icon}><BsInfoCircleFill/></Link></li>
        <li><Link to="/draw" className={styles.icon}><BsPencilFill /></Link></li>
        <li><Link to="/settings" className={styles.icon}><BsFillGearFill /></Link></li>
      </ul>
      </nav>
  )
}

export default NavBar