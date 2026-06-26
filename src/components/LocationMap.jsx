import './LocationMap.css'

const MAP_EMBED_URL =
  'https://www.google.com/maps?q=Sequoia+Diner,3719+MacArthur+Blvd,Oakland,CA+94619&output=embed'
const MAP_LINK_URL = 'https://www.google.com/maps/place/Sequoia+Diner/@37.7918218,-122.2017697,17z/'

function LocationMap() {
  return (
    <section className="location-map container">
      <h2>Find Us</h2>
      <p>3719 MacArthur Blvd, Oakland, CA 94619</p>
      <div className="location-map-frame">
        <iframe
          title="Sequoia Diner location on Google Maps"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a className="location-map-cta" href={MAP_LINK_URL} target="_blank" rel="noreferrer noopener">
        Get Directions
      </a>
    </section>
  )
}

export default LocationMap
