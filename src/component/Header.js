import React from 'react'
import "./Header.css"
import { Link ,NavLink } from 'react-router-dom'
function Header() {
  return (
  <header>
    <div className="contaienr">
    <Link to={"/"}>movies</Link>
      <ul>
        <li><NavLink to={"/"}>whatchlist</NavLink></li>
        <li><NavLink to={"/whached"}>Whatched</NavLink></li>
        <li className='btn'><NavLink to={"/add"}>add</NavLink></li>
      </ul>
    </div>
  </header>
  )
}

export default Header