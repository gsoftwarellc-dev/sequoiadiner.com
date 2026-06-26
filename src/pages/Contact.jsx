import LocationMap from '../components/LocationMap'
import ReviewsSection from '../components/ReviewsSection'
import './Contact.css'

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

        <div className="contact-detail-card">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 3.5 18.5 9l-4.3 1.7c-.4.15-.7.45-.85.85L11.7 16 7 3.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            Follow Us
          </h3>
          <div className="contact-social-links">
            <a
              href="https://www.instagram.com/sequoia_diner/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Instagram page (opens in new tab)"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/sequoiadiner"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Facebook page (opens in new tab)"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M14.5 8.5h-1.25c-.55 0-1 .45-1 1V11h2.1l-.3 2h-1.8v5h-2v-5H8.5v-2h1.75V9.2c0-1.6 1.05-2.7 2.65-2.7H14.5v2Z"
                  fill="currentColor"
                />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>

      <LocationMap />

      <section className="contact-review container">
        <ReviewsSection />
      </section>
    </>
  )
}

export default Contact
