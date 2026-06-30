import Hero from '../components/Hero'
import GallerySection from '../components/GallerySection'
import RandomGallery from '../components/RandomGallery'
import ReviewsSection from '../components/ReviewsSection'
import LocationMap from '../components/LocationMap'
import chickenFriedSteakImg from '../assets/gallery/chicken-fried-steak-grits.jpg'
import pecanStickyBunsImg from '../assets/gallery/pecan-sticky-buns.jpg'
import raspberryCrumbCakeImg from '../assets/gallery/raspberry-crumb-cake.jpg'
import belgianWaffleImg from '../assets/updated/belgian-waffle.jpg'
import eggsBenedictImg from '../assets/updated/eggs-benedict.jpg'
import houseSourdoughImg from '../assets/updated/house-sourdough-bread.jpg'

const ORDER_URL = 'https://order.toasttab.com/online/sequoia-diner-new-3719-macarthur-blvd-oakland-ca-94619'

function Home() {
  return (
    <>
      <Hero />

      <GallerySection
        title="All-Day Brunch"
        description="Fresh, classic breakfast and brunch favorites served all day."
        images={[
          {
            image: chickenFriedSteakImg,
            alt: 'Crispy fried chicken topped with creamy gravy over cheese grits, with a cucumber, radish, and edamame salad on the side.',
          },
          {
            image: belgianWaffleImg,
            alt: 'A Belgian waffle topped with whipped cream and powdered sugar.',
          },
          {
            image: eggsBenedictImg,
            alt: 'Two eggs Benedict on biscuits with bacon, hollandaise, and a side salad.',
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
            image: raspberryCrumbCakeImg,
            alt: 'A slice of raspberry crumb cake on a vintage plate.',
            caption: 'Raspberry Crumb Cake',
            link: ORDER_URL,
          },
          {
            image: houseSourdoughImg,
            alt: 'Two loaves of golden house-made sourdough bread on a cutting board.',
            caption: 'House Sourdough',
            link: ORDER_URL,
          },
        ]}
      />

      <RandomGallery
        title="Snapshot of Flavorful Moments"
        description="Browse our gallery to see hearty breakfast spreads, evening treats, and cool diner vibes that make every visit memorable."
        count={12}
      />

      <section className="container" style={{ padding: '1rem 1rem 3rem' }}>
        <ReviewsSection />
      </section>

      <LocationMap />
    </>
  )
}

export default Home
