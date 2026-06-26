import { useNavigate } from 'react-router-dom'
import './CallNowButton.css'

const PHONE_NUMBER = '+15104823719'
const DESKTOP_BREAKPOINT = '(min-width: 768px)'

function CallNowButton() {
  const navigate = useNavigate()

  const handleClick = (event) => {
    if (window.matchMedia(DESKTOP_BREAKPOINT).matches) {
      event.preventDefault()
      navigate('/page/contact')
    }
  }

  return (
    <a
      className="call-now-button"
      href={`tel:${PHONE_NUMBER}`}
      onClick={handleClick}
      aria-label="Call Sequoia Diner now"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5.5c0-.6.4-1 1-1h2.4c.5 0 .9.3 1 .8l.8 3a1 1 0 0 1-.3 1L7.6 10c1 2.2 2.7 3.9 4.9 4.9l.7-1.3a1 1 0 0 1 1-.3l3 .8c.5.1.8.5.8 1V17c0 .6-.4 1-1 1h-1C9.8 18 4 12.2 4 6.5v-1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <span>Call Now</span>
    </a>
  )
}

export default CallNowButton
