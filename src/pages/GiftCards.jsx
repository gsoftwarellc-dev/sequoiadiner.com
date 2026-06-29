import bannerImg from '../assets/gallery/cocktail-dining-room.jpg'
import './GiftCards.css'

const PURCHASE_URL = 'https://order.toasttab.com/egiftcards/sequoia-diner-new-3719-macarthur-blvd-oakland-ca-94619'
const BALANCE_URL = 'https://www.toasttab.com/sequoia-diner-new-3719-macarthur-blvd-oakland-ca-94619/findcard'

function GiftCards() {
  return (
    <section className="gift-cards-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="gift-cards-overlay" />
      <div className="gift-cards-card container">
        <h1>Gift Cards</h1>
        <p>
          Share the taste of Sequoia Diner with a gift card, or check the balance on a card you already
          have. Both are handled securely through our partner, Toast.
        </p>
        <div className="gift-cards-actions">
          <a className="gift-cards-cta" href={PURCHASE_URL} target="_blank" rel="noreferrer noopener">
            Purchase a Gift Card
          </a>
          <a className="gift-cards-cta gift-cards-cta-secondary" href={BALANCE_URL} target="_blank" rel="noreferrer noopener">
            Check Gift Card Balance
          </a>
        </div>
      </div>
    </section>
  )
}

export default GiftCards
