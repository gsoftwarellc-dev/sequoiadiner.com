import diningRoomImg from '../assets/gallery/omelet-table-spread.jpg'
import LocationMap from '../components/LocationMap'
import './PrivateEvents.css'

function PrivateEvents() {
  return (
    <>
      <section className="private-events-hero container">
        <div className="private-events-text">
          <h1>Private Events &amp; Restaurant Buyout</h1>
          <p>
            Looking for a space for your next celebration? Rent out Sequoia Diner for a private event or buy
            out the whole restaurant for your group. Our warm, retro-inspired dining room is perfect for
            birthdays, showers, team breakfasts, and other gatherings—give us a call and we'll help you plan
            the details, from the menu to the timing.
          </p>
          <p>
            Private events and restaurant buyouts are available in the evening, after our daytime service.
          </p>
          <a className="private-events-cta" href="tel:+15104823719">
            Call to Book Your Event
          </a>
        </div>
        <img
          className="private-events-image"
          src={diningRoomImg}
          alt="A table spread at Sequoia Diner with an omelet, toast, arugula, and coffee, with the bar and wine bottles in the background"
        />
      </section>

      <LocationMap />
    </>
  )
}

export default PrivateEvents
