import './ReviewsSection.css'

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/search/?api=1&query=Sequoia+Diner+Oakland'
const YELP_URL = 'https://www.yelp.com/biz/sequoia-diner-oakland'

const RATING_SUMMARY = {
  label: 'Excellent',
  score: '4.5',
  count: '887 reviews',
}

const REVIEWS = [
  {
    name: 'Adrian Arenas',
    date: '1 week ago',
    rating: 5,
    text: 'My first time! Really enjoyed this elevated diner. The prosciutto toast was INCREDIBLE and the mezcal bloody the best!',
    color: '#E8710A',
  },
  {
    name: 'Dede Ellen',
    date: '1 month ago',
    rating: 5,
    text: 'Popped in for breakfast one Saturday and was slightly disappointed they only do chicken and waffles on Sunday. Went with something else and it was still great.',
    color: '#1A73E8',
  },
  {
    name: 'Joanne Scott',
    date: '1 month ago',
    rating: 5,
    text: 'Sequoia Diner is such a great spot and absolutely worth the visit.',
    color: '#188038',
  },
]

function StarRating({ rating }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill={index < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L1.4 7.8l6-.7L10 1.5Z" />
        </svg>
      ))}
    </div>
  )
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-label="Verified" role="img">
      <path
        fill="#4285F4"
        d="M12 1.5 14.6 3l2.95-.36 1.3 2.65 2.65 1.3L21.14 9.5 22.5 12l-1.36 2.5.36 2.95-2.65 1.3-1.3 2.65-2.95-.36L12 22.5l-2.5-1.36-2.95.36-1.3-2.65-2.65-1.3.36-2.95L1.5 12l1.36-2.5-.36-2.95 2.65-1.3 1.3-2.65L9.4 3 12 1.5Z"
      />
      <path
        fill="#fff"
        d="M8.2 12.3l2.3 2.3 5-5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0"
      />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.04 12.27c0-.8-.07-1.57-.2-2.31H12v4.37h6.2c-.27 1.45-1.08 2.68-2.3 3.5v2.9h3.72c2.18-2 3.42-4.95 3.42-8.46Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.62-2.67l-3.72-2.9c-1.03.7-2.36 1.1-3.9 1.1-3 0-5.54-2.02-6.45-4.74H1.68v2.99C3.6 20.59 7.5 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.55 13.79a6.99 6.99 0 0 1 0-4.58V6.22H1.68a11.5 11.5 0 0 0 0 11.56l3.87-3Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.5c1.62 0 3.07.56 4.21 1.64l3.3-3.3C17.45 1.9 14.96.9 12 .9 7.5.9 3.6 3.32 1.68 6.92l3.87 2.99C6.46 7.52 9 5.5 12 5.5Z"
      />
    </svg>
  )
}

function ReviewsSection() {
  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <div className="reviews-header-summary">
          <GoogleIcon />
          <span className="reviews-header-label">{RATING_SUMMARY.label}</span>
          <StarRating rating={5} />
          <span className="reviews-header-score">{RATING_SUMMARY.score}</span>
          <span className="reviews-header-divider">|</span>
          <span className="reviews-header-count">{RATING_SUMMARY.count}</span>
        </div>
        <div className="reviews-header-ctas">
          <a
            className="reviews-header-cta"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            Write a review on Google
          </a>
          <a
            className="reviews-header-cta reviews-header-cta-yelp"
            href={YELP_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            Read reviews on Yelp
          </a>
        </div>
      </div>

      <div className="reviews-grid">
        {REVIEWS.map((review) => (
          <div className="review-card" key={review.name}>
            <div className="review-card-top">
              <div className="review-card-avatar" style={{ backgroundColor: review.color }}>
                {review.name.charAt(0).toUpperCase()}
              </div>
              <div className="review-card-identity">
                <span className="review-card-name">{review.name}</span>
                <span className="review-card-date">{review.date}</span>
              </div>
              <GoogleIcon />
            </div>
            <div className="review-card-meta">
              <StarRating rating={review.rating} />
              <VerifiedBadge />
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewsSection
