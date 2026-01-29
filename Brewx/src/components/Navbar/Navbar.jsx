import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <h2 className="logo">
          BREW<span>X</span>
        </h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>Our Coffee</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="btn-container">
          <button className="btn">Order Now</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
