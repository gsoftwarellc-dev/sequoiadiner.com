import { Link } from 'react-router-dom'
import './GallerySection.css'

function GallerySection({ title, description, images }) {
  return (
    <section className="gallery-section container">
      <div className="gallery-heading">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <div className="gallery-grid">
        {images.map((item) => {
          const figure = (
            <figure className="gallery-item" key={item.alt}>
              <img src={item.image} alt={item.alt} loading="lazy" />
            </figure>
          )
          if (!item.link) {
            return figure
          }

          const isExternal = item.link.startsWith('http')

          return isExternal ? (
            <a
              key={item.alt}
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
              className="gallery-item-link"
              aria-label={`Order: ${item.caption ?? item.alt}`}
            >
              {figure}
              {item.caption && <span className="gallery-caption">{item.caption}</span>}
            </a>
          ) : (
            <Link
              key={item.alt}
              to={item.link}
              className="gallery-item-link"
              aria-label={`Order: ${item.caption ?? item.alt}`}
            >
              {figure}
              {item.caption && <span className="gallery-caption">{item.caption}</span>}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default GallerySection
