import eggsBenedictImg from '../assets/updated/eggs-benedict.jpg'
import breakfastSandwichImg from '../assets/updated/breakfast-sandwich.jpg'
import bltaSandwichImg from '../assets/updated/blta-sandwich.jpg'
import biscuitAndGravyImg from '../assets/updated/biscuit-and-gravy.jpg'
import chilaquilesImg from '../assets/updated/chilaquiles.jpg'
import eggsAndHamPlateImg from '../assets/updated/eggs-and-ham-plate.jpg'
import houseSourdoughImg from '../assets/updated/house-sourdough-bread.jpg'
import diningRoomCounterImg from '../assets/updated/dining-room-counter.jpg'
import sausageAndEggsPlateImg from '../assets/updated/sausage-and-eggs-plate.jpg'
import melonBurrataSaladImg from '../assets/updated/melon-burrata-salad.jpg'
import beetAndPoachedEggSaladImg from '../assets/updated/beet-and-poached-egg-salad.jpg'
import stickyBunImg from '../assets/updated/sticky-bun.jpg'
import shrimpAndGritsImg from '../assets/updated/shrimp-and-grits.jpg'
import belgianWaffleImg from '../assets/updated/belgian-waffle.jpg'
import './GallerySection.css'

const ALL_PHOTOS = [
  { image: eggsBenedictImg, alt: 'Two eggs Benedict on biscuits with bacon, hollandaise, and a side salad.' },
  { image: breakfastSandwichImg, alt: 'A breakfast sandwich with egg and cheese on a biscuit, served with a side salad.' },
  { image: bltaSandwichImg, alt: 'A toasted BLT with avocado sandwich, served with potato salad.' },
  { image: biscuitAndGravyImg, alt: 'A biscuit smothered in sausage gravy with a dusting of paprika.' },
  { image: chilaquilesImg, alt: 'Chilaquiles with fried eggs, beans, avocado, and pickled onions.' },
  { image: eggsAndHamPlateImg, alt: 'A plate with poached eggs, grilled ham, hash browns, arugula, and toast.' },
  { image: houseSourdoughImg, alt: 'Two loaves of golden house-made sourdough bread on a cutting board.' },
  { image: diningRoomCounterImg, alt: 'The bright dining room and counter at Sequoia Diner with guests seated.' },
  { image: sausageAndEggsPlateImg, alt: 'A sausage patty with two fried eggs, hash browns, arugula, and toast.' },
  { image: melonBurrataSaladImg, alt: 'A watermelon and burrata salad with arugula, walnuts, and balsamic drizzle.' },
  { image: beetAndPoachedEggSaladImg, alt: 'Roasted beets topped with poached eggs, radish, and pickles.' },
  { image: stickyBunImg, alt: 'A pecan sticky bun on a vintage floral plate.' },
  { image: shrimpAndGritsImg, alt: 'Shrimp and grits topped with fried eggs and chimichurri.' },
  { image: belgianWaffleImg, alt: 'A Belgian waffle topped with whipped cream and powdered sugar.' },
]

function getRandomPhotos(count) {
  const shuffled = [...ALL_PHOTOS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

function RandomGallery({ title, description, count = 12 }) {
  const photos = getRandomPhotos(count)

  if (photos.length === 0) {
    return null
  }

  return (
    <section className="gallery-section container">
      <div className="gallery-heading">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <div className="gallery-grid gallery-grid-dense">
        {photos.map((item) => (
          <a
            key={item.image}
            href={item.image}
            target="_blank"
            rel="noreferrer noopener"
            className="gallery-item-link"
            aria-label={`View full image: ${item.alt}`}
          >
            <figure className="gallery-item">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </figure>
          </a>
        ))}
      </div>
    </section>
  )
}

export default RandomGallery
