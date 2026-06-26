import reviewImg from '../assets/gallery/poached-eggs-hash-toast.jpg'
import LocationMap from '../components/LocationMap'
import './Contact.css'

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/search/?api=1&query=Sequoia+Diner+Oakland'

function Contact() {
  return (
    <>
      <section className="contact-intro container">
        <h1>Get In Touch</h1>
        <p>
          We're here to help—whether you have a question about our menu, need catering details, or want to
          plan a visit. Call us directly or stop by and we'll get back to you as soon as we can.
        </p>
      </section>

      <section className="contact-details container">
        <div className="contact-detail-card">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 5.5c0-.6.4-1 1-1h2.4c.5 0 .9.3 1 .8l.8 3a1 1 0 0 1-.3 1L7.6 10c1 2.2 2.7 3.9 4.9 4.9l.7-1.3a1 1 0 0 1 1-.3l3 .8c.5.1.8.5.8 1V17c0 .6-.4 1-1 1h-1C9.8 18 4 12.2 4 6.5v-1Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            Phone
          </h3>
          <a href="tel:+15104823719">(510) 482-3719</a>
        </div>

        <div className="contact-detail-card">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Visit Us
          </h3>
          <address>
            3719 MacArthur Blvd
            <br />
            Oakland, CA 94619
          </address>
        </div>

        <div className="contact-detail-card">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Hours
          </h3>
          <p>Wednesday – Sunday: 8:00 AM – 2:00 PM</p>
          <p>Monday: 9:00 AM – 2:00 PM</p>
          <p>Tuesday: Closed</p>
        </div>
      </section>

      <LocationMap />

      <section className="contact-review container">
        <img
          src={reviewImg}
          alt="A breakfast plate with poached eggs over hash, toast, shredded carrots, and arugula at Sequoia Diner"
        />
        <div className="contact-review-text">
          <h2>Share Your Experience And Help Others Discover Us!</h2>
          <p>Your feedback helps others discover Sequoia Diner. If you enjoyed your visit, please share it.</p>
          <a className="contact-cta" href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer noopener">
            Rate Us On Google
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
