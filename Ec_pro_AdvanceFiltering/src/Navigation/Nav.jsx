import React from 'react'
import { FiHeart } from 'react-icons/fi';
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className='search-input'
          placeholder='Enter your search shoes'
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className='nav-icons' />
        </a>

        <a href="#">
          <PiShoppingCartSimple className='nav-icons' />
        </a>

        <a href="#">
          <CiUser className='nav-icons' />
        </a>

      </div>
    </nav>
  )
}

export default Nav