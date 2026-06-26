import chickenFriedSteakImg from '../assets/gallery/chicken-fried-steak-grits.jpg'
import veggieEggBowlImg from '../assets/gallery/veggie-egg-bowl.jpg'
import hotSaucesImg from '../assets/gallery/house-hot-sauces.jpg'
import waffleImg from '../assets/gallery/waffle-berry-cream.jpg'
import pecanStickyBunsImg from '../assets/gallery/pecan-sticky-buns.jpg'
import veggieHashImg from '../assets/gallery/summer-veggie-hash-poached-eggs.jpg'
import friedRiceBowlImg from '../assets/gallery/fried-rice-egg-bowl.jpg'
import roastedVeggiePlateImg from '../assets/gallery/roasted-veggie-egg-plate.jpg'
import meatballGritsImg from '../assets/gallery/meatball-grits-bowl.jpg'
import bltSandwichImg from '../assets/gallery/blt-sandwich.jpg'
import tortelliniImg from '../assets/gallery/tortellini-peas-carrots.jpg'
import raspberryCrumbCakeImg from '../assets/gallery/raspberry-crumb-cake.jpg'
import breakfastPlateImg from '../assets/gallery/breakfast-plate-sausage-eggs.jpg'
import cocktailDiningRoomImg from '../assets/gallery/cocktail-dining-room.jpg'
import beetMangoSaladImg from '../assets/catering/beet-mango-salad.jpg'
import englishBreakfastImg from '../assets/catering/english-breakfast-plate.jpg'
import mimosaFlightImg from '../assets/catering/mimosa-flight.jpg'
import poachedEggSpreadImg from '../assets/catering/poached-egg-breakfast-spread.jpg'
import salmonSaladImg from '../assets/catering/salmon-salad.jpg'
import sesameCookiesImg from '../assets/catering/sesame-cookies.jpg'
import flowerArrangementImg from '../assets/story/flower-arrangement.jpg'
import barShelfBottlesImg from '../assets/bar/bar-shelf-bottles-counter.jpg'
import barShelfHotSauceImg from '../assets/bar/bar-shelf-hot-sauce.jpg'
import fullBackBarImg from '../assets/bar/full-back-bar-bottles.jpg'
import latteArtImg from '../assets/bar/latte-art-leaf.jpg'
import lavenderLemonadeImg from '../assets/bar/lavender-lemonade-mimosa.jpg'
import margaritaTequilaImg from '../assets/bar/margarita-with-tequila-bottle.jpg'
import orangeSpritzImg from '../assets/bar/orange-spritz-cocktail.jpg'
import redJuiceCoolersImg from '../assets/bar/red-juice-coolers.jpg'
import spicyMargaritaImg from '../assets/bar/spicy-margarita-jalapeno.jpg'
import './GallerySection.css'

const ALL_PHOTOS = [
  { image: chickenFriedSteakImg, alt: 'Crispy fried chicken over cheese grits with a cucumber radish salad.' },
  { image: veggieEggBowlImg, alt: 'A bowl of roasted vegetables topped with a poached egg.' },
  { image: hotSaucesImg, alt: 'Two house-made hot sauce bottles on the bar counter.' },
  { image: waffleImg, alt: 'A golden waffle topped with berry whipped cream.' },
  { image: pecanStickyBunsImg, alt: 'A tray of freshly baked pecan sticky buns.' },
  { image: veggieHashImg, alt: 'A summer veggie hash topped with poached eggs and herb pesto.' },
  { image: friedRiceBowlImg, alt: 'A bowl of fried rice topped with a crispy fried egg.' },
  { image: roastedVeggiePlateImg, alt: 'A plate of roasted carrots and beets with avocado and a fried egg.' },
  { image: meatballGritsImg, alt: 'Meatballs in marinara sauce over cheese grits.' },
  { image: bltSandwichImg, alt: 'A stacked BLT sandwich with crispy hash browns.' },
  { image: tortelliniImg, alt: 'Tortellini with peas, carrots, and edible flowers.' },
  { image: raspberryCrumbCakeImg, alt: 'A slice of raspberry crumb cake on a vintage plate.' },
  { image: breakfastPlateImg, alt: 'A breakfast plate with sausage, poached eggs, and toast.' },
  { image: cocktailDiningRoomImg, alt: 'A craft cocktail on a table in the dining room.' },
  { image: beetMangoSaladImg, alt: 'A salad with mango, beets, pomegranate, and goat cheese.' },
  { image: englishBreakfastImg, alt: 'A plate with black pudding, baked beans, bacon, and ham.' },
  { image: mimosaFlightImg, alt: 'A flight of three mimosas in different fruit flavors.' },
  { image: poachedEggSpreadImg, alt: 'A breakfast spread with poached eggs, toast, and bacon.' },
  { image: salmonSaladImg, alt: 'A seared salmon salad with greens and roasted vegetables.' },
  { image: sesameCookiesImg, alt: 'Two stacked sesame seed cookies on a patterned plate.' },
  { image: flowerArrangementImg, alt: 'A fresh flower arrangement inside the dining room.' },
  { image: barShelfBottlesImg, alt: 'The back-bar liquor shelf with a coffee mug on the counter.' },
  { image: barShelfHotSauceImg, alt: 'House-made hot sauce bottles with the bar shelf in the background.' },
  { image: fullBackBarImg, alt: 'The full back-bar display of liquor bottles and glassware.' },
  { image: latteArtImg, alt: 'A latte with leaf-pattern foam art.' },
  { image: lavenderLemonadeImg, alt: 'A lavender lemonade next to a sparkling mimosa.' },
  { image: margaritaTequilaImg, alt: 'A salt-rimmed margarita next to a bottle of tequila.' },
  { image: orangeSpritzImg, alt: 'A bright orange spritz cocktail with a lime garnish.' },
  { image: redJuiceCoolersImg, alt: 'Two glasses of a vivid red juice cooler drink.' },
  { image: spicyMargaritaImg, alt: 'A spicy margarita with a jalapeño garnish and salt rim.' },
]

function getRandomPhotos(count) {
  const shuffled = [...ALL_PHOTOS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

function RandomGallery({ title, description, count = 12 }) {
  const photos = getRandomPhotos(count)

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
