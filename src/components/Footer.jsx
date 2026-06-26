import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './Footer.css'

const FOOTER_LINKS = [
  { to: '/story', label: 'Our Story' },
  { to: '/page/pdf-menu', label: 'PDF Menu' },
  { to: '/page/contact', label: 'Contact' },
  { to: '/page/private-events--restaurant-buyout', label: 'Private Events / Restaurant Buyout' },
]

const HOURS = [
  { label: 'Monday', value: '9:00 AM – 2:00 PM' },
  { label: 'Wednesday – Sunday', value: '8:00 AM – 2:00 PM' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-card">
        <div className="footer-top">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Sequoia Diner I All Day Breakfast, Brunch I Bar" />
          </Link>

          <nav className="footer-links" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/order" className="footer-cta">
            Order online
          </Link>
        </div>

        <div className="footer-divider" />

        <div className="footer-info">
          <div className="footer-info-block">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Address
            </h3>
            <address>
              3719 MacArthur Blvd
              <br />
              Oakland, CA 94619
            </address>
          </div>

          <div className="footer-info-block">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Hours
            </h3>
            <ul>
              <li className="footer-hours-header">
                <span>Day</span>
                <span>Time</span>
              </li>
              {HOURS.map((row) => (
                <li key={row.label}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-info-block">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 5.5c0-.6.4-1 1-1h2.4c.5 0 .9.3 1 .8l.8 3a1 1 0 0 1-.3 1L7.6 10c1 2.2 2.7 3.9 4.9 4.9l.7-1.3a1 1 0 0 1 1-.3l3 .8c.5.1.8.5.8 1V17c0 .6-.4 1-1 1h-1C9.8 18 4 12.2 4 6.5v-1Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Contact
            </h3>
            <div className="footer-contact-line">
              <a href="tel:+15104823719">(510) 482-3719</a>
              <a
                href="https://www.instagram.com/sequoia_diner/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Instagram page (opens in new tab)"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/sequoiadiner"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Facebook page (opens in new tab)"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M14.5 8.5h-1.25c-.55 0-1 .45-1 1V11h2.1l-.3 2h-1.8v5h-2v-5H8.5v-2h1.75V9.2c0-1.6 1.05-2.7 2.65-2.7H14.5v2Z"
                    fill="currentColor"
                  />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copyright">© 2026 Sequoia Diner. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
