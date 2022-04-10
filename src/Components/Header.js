import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context'
import Cart from './Cart'
import './Header.css'

const Header = () => {
  const {cart}  =useContext(CartContext)
  return (
    <div className='header'>
        <span className='title'>Context API Example </span>
        <ul className='nav'>
            <li>
                <Link to="/" className='header_list'>Home</Link>
            </li>
            <li>
                <Link to="/cart" className='header_list'>Cart ({cart.length})</Link>
            </li>

        </ul>
    </div>
  )
}

export default Header