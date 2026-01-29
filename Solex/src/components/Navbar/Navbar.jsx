import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container nav-inner">
            <h2 className="logo">
                SOLE<span>X</span>
            </h2>

            <ul className="nav-links">
                <li>Home</li>
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Contact</li>
            </ul>

            <div className="btn-container">
                <button className='btn'>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
