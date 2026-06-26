import { Link } from 'react-router-dom'
import spreadImg from '../assets/catering/poached-egg-breakfast-spread.jpg'
import './CateringCTA.css'

function CateringCTA() {
  return (
    <section className="catering-cta-section container">
      <img
        className="catering-cta-image"
        src={spreadImg}
        alt="A breakfast spread with poached eggs, hash browns, toast, and coffee at Sequoia Diner"
      />
      <div className="catering-cta-text">
        <h2>Catering For All Events</h2>
        <p>
          Let Sequoia Diner bring the flavor to your next event. We offer easy catering for everything from
          office lunches to family gatherings or special occasions. Choose from our brunch favorites, fresh
          salads, and house-baked treats—each made fresh. Reach out to us to customize your order, and let our
          team handle the details for a seamless experience.
        </p>
        <Link className="catering-cta-button" to="/page/catering">
          Cater With Us
        </Link>
      </div>
    </section>
  )
}

export default CateringCTA
