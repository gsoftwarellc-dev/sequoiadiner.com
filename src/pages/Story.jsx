import storyImg from '../assets/story/storefront-exterior.jpg'
import './Story.css'

function Story() {
  return (
    <section className="story container">
      <div className="story-text">
        <h1>Welcome to Sequoia Diner</h1>
        <p>
          A quaint and bright neighborhood staple nestled in the heart of Oakland, we blend a charming retro
          flair with a passionate, modern approach to classic comfort food, creating a warm and welcoming
          space where the community can gather, connect, and enjoy a truly exceptional meal.
        </p>
        <p>
          We believe that great food starts from scratch. That is why our kitchen is dedicated to crafting as
          much as possible by hand. From our signature housemade sausages and freshly baked breads to our
          artisanal jams and delicate morning pastries, everything we serve is prepared daily using carefully
          sourced, high-quality ingredients.
        </p>
        <p>
          Whether you are stepping into our vibrant, retro-inspired dining room for your morning coffee or
          grabbing a hearty midday meal, we treat every guest like family. At Sequoia Diner, it's not just
          about serving breakfast and lunch—it's about honoring time-tested culinary traditions and sharing
          our love for food with the incredible Oakland community.
        </p>
        <p className="story-callout">Come on in, slide into a booth, and taste the difference that housemade quality makes!</p>
      </div>
      <img
        className="story-image"
        src={storyImg}
        alt="The Sequoia Diner storefront exterior with the illuminated window sign and hanging diner sign"
      />
    </section>
  )
}

export default Story
