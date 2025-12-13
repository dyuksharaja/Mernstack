import React from 'react'
import "./Navbar.css";
import {Link}from'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="Navbar">
            <ul>
                <li><a href='/'>Home</a></li>
               <li><a href='/'>About</a></li>
               <li><Link to='/contact'>Contact</Link></li>
               <li><Link to='/service'>Services</Link></li>
                <li><Link to='/useState'>useState</Link></li>
                <li><Link to='/UseEffect'>UseEffect</Link></li>
            </ul>
            </nav>
    </div>

    
  )
}

export default Navbar