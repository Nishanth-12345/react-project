import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <h2>HEADPHONES</h2> 
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}
