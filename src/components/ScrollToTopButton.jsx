import { useEffect, useState } from 'react'
import './ScrollToTopButton.css'

const SHOW_AFTER_SCROLL_Y = 400

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_SCROLL_Y)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      className="scroll-to-top-button"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 14l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default ScrollToTopButton
