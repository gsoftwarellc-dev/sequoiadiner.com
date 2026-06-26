import featureImg from '../assets/catering/salmon-salad.jpg'
import mimosaImg from '../assets/catering/mimosa-flight.jpg'
import breakfastSpreadImg from '../assets/catering/poached-egg-breakfast-spread.jpg'
import englishBreakfastImg from '../assets/catering/english-breakfast-plate.jpg'
import sesameCookiesImg from '../assets/catering/sesame-cookies.jpg'
import beetMangoSaladImg from '../assets/catering/beet-mango-salad.jpg'
import './Catering.css'

const GRID_IMAGES = [
  { image: mimosaImg, alt: 'A flight of three mimosas in different fruit flavors on a sunlit table.' },
  {
    image: breakfastSpreadImg,
    alt: 'A breakfast spread with poached eggs, beet hash, toast, crispy bacon, coffee, and orange juice.',
  },
  { image: englishBreakfastImg, alt: 'A plate with black pudding, baked beans, bacon, and ham.' },
  { image: sesameCookiesImg, alt: 'Two stacked sesame seed cookies on a patterned plate.' },
  {
    image: beetMangoSaladImg,
    alt: 'A salad with mango, beets, pomegranate, goat cheese, and candied walnuts over greens.',
  },
  { image: featureImg, alt: 'A seared salmon salad with greens, radish, edamame, and roasted vegetables.' },
]

function Catering() {
  return (
    <>
      <section className="catering-hero container">
        <div className="catering-hero-text">
          <h1>Sequoia Diner Catering</h1>
          <p>
            From office lunches to backyard gatherings, Sequoia Diner offers easy catering. Enjoy breakfast
            favorites, brunch plates, and fresh seasonal salads—perfect for groups of any size. Choose
            delivery or full setup, customize your order, and count on us for fresh ingredients and smooth
            service.
          </p>
          <a
            className="catering-cta"
            href="tel:+15104823719"
          >
            Order Catering
          </a>
        </div>
        <img className="catering-hero-image" src={featureImg} alt="A seared salmon salad with greens, radish, edamame, and roasted vegetables." />
      </section>

      <section className="catering-grid container">
        {GRID_IMAGES.map((item) => (
          <figure className="catering-grid-item" key={item.alt}>
            <img src={item.image} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </section>
    </>
  )
}

export default Catering
