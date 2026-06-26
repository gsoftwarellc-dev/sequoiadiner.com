import storyImg from '../assets/story/storefront-exterior.jpg'
import './Story.css'

function Story() {
  return (
    <section className="story container">
      <div className="story-text">
        <h1>Welcome to Sequoia Diner</h1>
        <p>
          A charming retro neighborhood diner in the heart of Oakland's Laurel District, Sequoia Diner has
          been bringing people together over honest, delicious food since 2015. Our goal is simple to create
          a welcoming place where friends, families, and neighbors can slow down, connect, and enjoy a great
          meal.
        </p>
        <p>
          Our kitchen prepares as much as possible from scratch, including our house-made breads, jams,
          sausages, scones, coffee cakes, and cookies. We proudly use as many organic, local, and seasonal
          ingredients as possible, letting quality products and thoughtful cooking shine in every dish.
        </p>
        <p>
          Whether you're stopping in for a cup of organic coffee, gathering for weekend brunch, enjoying a
          handcrafted cocktail, or pairing lunch with a thoughtfully selected wine, you'll always find warm
          hospitality and food made with care.
        </p>
        <p className="story-callout">
          At Sequoia Diner, every guest is treated like a neighbor, and every meal is made to be shared,
          enjoyed, and remembered. We can't wait to welcome you to our table.
        </p>
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
