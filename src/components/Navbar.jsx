import { Link, NavLink } from 'react-router'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link id="logo" to={'/'}>
        IWATCH
      </Link>

      <ul className="nav-links">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to="#series">Series</NavLink></li>
        <li><NavLink to="#movies">Movies</NavLink></li>
        <li><NavLink to="#new">New & Popular</NavLink></li>
        <li><NavLink to="#mylist">My List</NavLink></li>
      </ul>

      <div className="nav-actions">
        <input id="nav-search" type="search" placeholder='Search' />
        <button className="btn-primary">Sign In</button>
      </div>
    </nav>
  )
}