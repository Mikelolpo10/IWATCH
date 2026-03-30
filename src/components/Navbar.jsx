import { Link } from 'react-router'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link id="logo" to={'/'}>
        IWATCH
      </Link>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#series">Series</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#new">New & Popular</a></li>
        <li><a href="#mylist">My List</a></li>
      </ul>

      <div className="nav-actions">
        <input id="nav-search" type="search" placeholder='Search' />
        <button className="btn-primary">Sign In</button>
      </div>
    </nav>
  )
}