import Link from "next/link";
import Image from "next/image";
import { dishes } from "@/lib/menu";

export default function HomePage() {
  const featuredDishes = dishes.filter((dish) => dish.popular);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">WELCOME TO ADDIS EATS</span>

          <h1>
            A Taste of Ethiopia,
            <span> Delivered with Love.</span>
          </h1>

          <p>
            Discover delicious Ethiopian meals, explore traditional flavors, and
            enjoy your favorite dishes with Addis Eats.
          </p>

          <div className="hero-actions">
            <Link href="/menu" className="btn-primary">
              Explore Our Menu
            </Link>

            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <span>🍲</span>
          <span>🍽️</span>
          <span>🌶️</span>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <div className="highlight-item">
          <span>🍴</span>
          <div>
            <h3>Authentic Flavors</h3>
            <p>Traditional Ethiopian dishes</p>
          </div>
        </div>

        <div className="highlight-item">
          <span>🥗</span>
          <div>
            <h3>Fresh Ingredients</h3>
            <p>Freshly prepared meals</p>
          </div>
        </div>

        <div className="highlight-item">
          <span>❤️</span>
          <div>
            <h3>Made with Care</h3>
            <p>Food worth sharing</p>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="featured-section">
        <div className="section-heading">
          <span className="section-label">OUR FAVORITES</span>
          <h2>Explore Our Popular Dishes</h2>
          <p>
            Enjoy some of our favorite Ethiopian meals, prepared with
            traditional flavors.
          </p>
        </div>

        <div className="featured-grid">
          {featuredDishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className="dish-image">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="dish-photo"
                />
                {dish.popular && <span className="popular-badge">Popular</span>}
              </div>

              <div className="dish-content">
                <span className="dish-category">{dish.category}</span>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>

                <div className="dish-footer">
                  <strong>{dish.price} ETB</strong>
                  <Link href="/menu" className="dish-link">
                    View Menu →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-action">
          <Link href="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-icon">🇪🇹</div>

        <div>
          <span className="section-label">OUR STORY</span>
          <h2>Bringing Ethiopian Food Closer to You</h2>
          <p>
            Addis Eats celebrates Ethiopian food and its rich flavors. Our goal
            is to make discovering and enjoying traditional meals simple and
            enjoyable.
          </p>

          <Link href="/about" className="text-link">
            Discover Our Story →
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Explore Something Delicious?</h2>
        <p>Find your next favorite Ethiopian meal today.</p>
        <Link href="/menu" className="btn-light">
          Explore the Menu
        </Link>
      </section>
    </main>
  );
}
