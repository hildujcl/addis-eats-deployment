import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Addis Eats and our passion for Ethiopian food and traditional flavors.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="section-label">OUR STORY</span>
        <h1>Bringing the Taste of Ethiopia Closer to You</h1>
        <p>
          Addis Eats celebrates the rich flavors, traditions, and culture of
          Ethiopian food through a simple and enjoyable food-ordering
          experience.
        </p>
        <Link href="/menu" className="btn-primary">
          Explore Our Menu
        </Link>
      </section>

      <section className="about-details">
        <div className="about-detail-card">
          <span>🇪🇹</span>
          <h2>Our Inspiration</h2>
          <p>
            Inspired by Ethiopia's diverse food culture, Addis Eats brings
            traditional meals and familiar flavors into one place.
          </p>
        </div>

        <div className="about-detail-card">
          <span>🍲</span>
          <h2>Our Purpose</h2>
          <p>
            We aim to make discovering Ethiopian dishes easier with a welcoming,
            simple, and user-friendly experience.
          </p>
        </div>

        <div className="about-detail-card">
          <span>❤️</span>
          <h2>Our Values</h2>
          <p>
            We celebrate authentic flavors, thoughtful service, and the joy of
            sharing good food.
          </p>
        </div>
      </section>

      <section className="about-ending">
        <h2>Every Meal Has a Story.</h2>
        <p>Discover yours with Addis Eats.</p>
        <Link href="/menu" className="btn-light">
          Discover Our Dishes
        </Link>
      </section>
    </main>
  );
}
