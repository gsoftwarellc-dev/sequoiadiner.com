import { Link } from 'react-router-dom'
import heroBg from '../assets/gallery/sausage-poached-eggs-hash.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="hero-subtitle">Serving All-Day Breakfast, Brunch &amp; Craft Cocktails</p>
        <address className="hero-address">3719 MacArthur Blvd, Oakland, CA 94619</address>
        <Link className="hero-cta" to="/order">
          Order Online
        </Link>
      </div>
    </section>
  )
}

export default Hero
