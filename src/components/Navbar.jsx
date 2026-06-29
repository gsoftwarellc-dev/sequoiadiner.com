import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Our Story' },
  { to: '/page/pdf-menu', label: 'PDF Menu' },
  { to: '/page/gift-cards', label: 'Gift Cards' },
  { href: 'https://yelp.to/-p8uUwUI92', label: 'Reserve a Table' },
  { href: 'https://yelp.to/PQK1mikxyZ', label: 'Join the Waitlist' },
  { to: '/page/contact', label: 'Contact' },
]

const MORE_LINKS = [
  { to: '/page/private-events--restaurant-buyout', label: 'Private Events / Restaurant Buyout' },
]

const TOAST_URL = 'https://order.toasttab.com/online/sequoia-diner-new-3719-macarthur-blvd-oakland-ca-94619'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Sequoia Diner I All Day Breakfast, Brunch I Bar" />
        </Link>

        <div className="navbar-links">
          {NAV_LINKS.map((link) =>
            link.href ? (
              <a
                key={link.href}
                href={link.href}
                className="navbar-link"
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.to} to={link.to} className="navbar-link">
                {link.label}
              </Link>
            ),
          )}

          <div className="navbar-more">
            <span className="navbar-link navbar-more-trigger">More</span>
            <div className="navbar-more-dropdown">
              {MORE_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="navbar-more-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <a href={TOAST_URL} target="_blank" rel="noreferrer noopener" className="navbar-cta">
            Order online
          </a>
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
          {NAV_LINKS.map((link) =>
            link.href ? (
              <a
                key={link.href}
                href={link.href}
                className="navbar-mobile-link"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="navbar-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          {MORE_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={TOAST_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-cta navbar-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Order online
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
