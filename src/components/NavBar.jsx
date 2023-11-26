import React from 'react'
import { FiSearch } from "react-icons/fi";
import "./style.css"
function NavBar() {
  return (
    <div className='navbar-container'> 
      <h1>Nav<span className='logo'>Bar</span></h1>
      <ul className='nav-items-container'> 
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <li>Clients</li>
        <li>E-mail</li>
        <li>Request a rate</li>
        <li>
          <FiSearch />
        </li>
      </ul>
    </div>
  );
}

export default NavBar