import Hero from '../components/Hero'
import GallerySection from '../components/GallerySection'
import RandomGallery from '../components/RandomGallery'
import CateringCTA from '../components/CateringCTA'
import GoogleReviewButton from '../components/GoogleReviewButton'
import LocationMap from '../components/LocationMap'
import chickenFriedSteakImg from '../assets/gallery/chicken-fried-steak-grits.jpg'
import hotSaucesImg from '../assets/gallery/house-hot-sauces.jpg'
import waffleImg from '../assets/gallery/waffle-berry-cream.jpg'
import pecanStickyBunsImg from '../assets/gallery/pecan-sticky-buns.jpg'
import veggieHashImg from '../assets/gallery/summer-veggie-hash-poached-eggs.jpg'
import meatballGritsImg from '../assets/gallery/meatball-grits-bowl.jpg'
import bltSandwichImg from '../assets/gallery/blt-sandwich.jpg'
import tortelliniImg from '../assets/gallery/tortellini-peas-carrots.jpg'
import raspberryCrumbCakeImg from '../assets/gallery/raspberry-crumb-cake.jpg'

const ORDER_URL = '/order'

function Home() {
  return (
    <>
      <Hero />

      <GallerySection
        title="All-Day Brunch, Every Day"
        description="Classic breakfast and brunch favorites served all day, every day."
        images={[
          {
            image: chickenFriedSteakImg,
            alt: 'Crispy fried chicken topped with creamy gravy over cheese grits, with a cucumber, radish, and edamame salad on the side.',
          },
          {
            image: waffleImg,
            alt: 'A golden Belgian waffle dusted with powdered sugar and topped with a swirl of berry whipped cream.',
          },
          {
            image: veggieHashImg,
            alt: 'A summer veggie hash with corn, green beans, eggplant, and tomatoes, topped with poached eggs and herb pesto.',
          },
        ]}
      />

      <GallerySection
        title="Hearty Plates"
        description="Comfort food favorites made fresh, from bowls to sandwiches."
        images={[
          {
            image: meatballGritsImg,
            alt: 'Meatballs in marinara sauce over creamy cheese grits, topped with a poached egg and shaved parmesan.',
            caption: 'Meatballs over Cheese Grits',
            link: ORDER_URL,
          },
          {
            image: bltSandwichImg,
            alt: 'A stacked BLT sandwich with bacon, lettuce, tomato, and red onion on toasted bread, served with crispy hash browns.',
            caption: 'BLT Sandwich',
            link: ORDER_URL,
          },
          {
            image: tortelliniImg,
            alt: 'Tortellini with peas, carrots, and edible flowers in a light cream sauce.',
            caption: 'Tortellini with Peas & Carrots',
            link: ORDER_URL,
          },
        ]}
      />

      <GallerySection
        title="Made In-House"
        description="From sticky buns to small-batch hot sauce, made fresh in our kitchen."
        images={[
          {
            image: pecanStickyBunsImg,
            alt: 'A tray of freshly baked pecan sticky buns glazed and topped with chopped pecans.',
            caption: 'Pecan Sticky Buns',
            link: ORDER_URL,
          },
          {
            image: hotSaucesImg,
            alt: 'Two house-made hot sauce bottles, one red and one green, with hand-drawn Sequoia Diner labels on the bar counter.',
            caption: 'House-Made Hot Sauces',
            link: ORDER_URL,
          },
          {
            image: raspberryCrumbCakeImg,
            alt: 'A slice of raspberry crumb cake on a vintage plate.',
            caption: 'Raspberry Crumb Cake',
            link: ORDER_URL,
          },
        ]}
      />

      <CateringCTA />

      <RandomGallery
        title="Snapshot of Flavorful Moments"
        description="Browse our gallery to see hearty breakfast spreads, evening treats, and cool diner vibes that make every visit memorable."
        count={12}
      />

      <section className="container" style={{ padding: '1rem 1rem 3rem' }}>
        <GoogleReviewButton />
      </section>

      <LocationMap />
    </>
  )
}

export default Home
