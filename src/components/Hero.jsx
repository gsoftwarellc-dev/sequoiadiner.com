import heroBg from '../assets/gallery/sausage-poached-eggs-hash.jpg'
import './Hero.css'

const TOAST_URL = 'https://order.toasttab.com/online/sequoia-diner-new-3719-macarthur-blvd-oakland-ca-94619'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="hero-subtitle">Serving All-Day Breakfast, Brunch &amp; Craft Cocktails</p>
        <address className="hero-address">3719 MacArthur Blvd, Oakland, CA 94619</address>
        <a className="hero-cta" href={TOAST_URL} target="_blank" rel="noreferrer noopener">
          Order Online
        </a>
      </div>
    </section>
  )
}

export default Hero
