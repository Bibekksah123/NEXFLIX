import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bel_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
function Navbar() {
  return (
    <div className='navbar poppins-extralight'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul className='poppins-extralight'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icon'/>
        <p className='prata-regular'>Children</p>
        <img src={bel_icon} alt="" className='icon' />
        <div className="nav_profile">
          <img src={profile} alt="" className='icons' />
          <img src={caret_icon} alt="" className='carts' />
          <div className="dropdwon">
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar