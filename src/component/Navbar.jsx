import React from 'react'
import logo from "../assets/logo.svg";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <div className='navbar-container  mt-3 ' >
          <div className = "leftsideNav mx-2">
            <img src = {logo} alt = "logo" />
            <button className='upgrade-button'>Upgrade</button>
          </div>
    </div>
  )
}

export default Navbar