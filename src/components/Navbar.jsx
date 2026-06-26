import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Our Story' },
  { to: '/page/pdf-menu', label: 'PDF Menu' },
  { to: '/page/contact', label: 'Contact' },
  { to: '/page/private-events--restaurant-buyout', label: 'Private Events / Restaurant Buyout' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Sequoia Diner I All Day Breakfast, Brunch I Bar" />
        </Link>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="navbar-link">
              {link.label}
            </Link>
          ))}
          <Link to="/order" className="navbar-cta">
            Order online
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar-mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="navbar-mobile-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            to="/order"
            className="navbar-cta navbar-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Order online
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
