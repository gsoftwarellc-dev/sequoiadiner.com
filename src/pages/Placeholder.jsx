import { Link } from 'react-router-dom'
import './Placeholder.css'

function Placeholder({ title }) {
  return (
    <section className="placeholder container">
      <h1>{title}</h1>
      <p>Coming soon.</p>
      <Link to="/" className="placeholder-link">
        Back to home
      </Link>
    </section>
  )
}

export default Placeholder
