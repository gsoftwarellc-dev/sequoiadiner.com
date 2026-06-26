import bannerImg from '../assets/gallery/chicken-fried-steak-grits.jpg'
import './Order.css'

const TOAST_URL = 'https://order.toasttab.com/online/sequoia-diner-new-3719-macarthur-blvd-oakland-ca-94619'

function Order() {
  return (
    <section className="order-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="order-banner-overlay" />
      <div className="order-card container">
        <h1>Order Online</h1>
        <p>
          Order takeout or delivery straight from our menu. You'll be taken to our secure ordering
          partner, Toast, to complete your order.
        </p>
        <a className="order-cta" href={TOAST_URL} target="_blank" rel="noreferrer noopener">
          Continue to Order
        </a>
        <p className="order-note">
          Opens in a new tab at{' '}
          <a className="order-note-link" href={TOAST_URL} target="_blank" rel="noreferrer noopener">
            order.toasttab.com
          </a>
        </p>
      </div>
    </section>
  )
}

export default Order
