"use client";

import { useMemo, useState } from "react";
import { dishes } from "@/lib/menu";
import DishCard from "./DishCard";

export default function MenuClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(dishes.map((dish) => dish.category))],
    [],
  );

  const filteredDishes = dishes.filter((dish) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      dish.name.toLowerCase().includes(searchText) ||
      dish.description.toLowerCase().includes(searchText);

    const matchesCategory = category === "All" || dish.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="menu-page">
      {/* Menu Hero */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <span className="menu-eyebrow">♡ MADE WITH LOVE ♡</span>

          <h1>
            Discover Our
            <span> Delicious Menu</span>
          </h1>

          <p>
            From traditional Ethiopian favorites to fresh and flavorful meals,
            find something delicious to enjoy.
          </p>

          <div className="menu-hero-note">
            <span>🍲</span>
            <span>Authentic Ethiopian Flavors</span>
            <span>♡</span>
          </div>
        </div>

        <div className="menu-hero-decoration" aria-hidden="true">
          <span>🍽️</span>
          <span>🌶️</span>
          <span>🥗</span>
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-content">
        <div className="menu-heading">
          <div>
            <span className="section-label">EXPLORE AND ENJOY</span>
            <h2>Find Your Favorite Dish</h2>
            <p>Explore our selection of delicious meals made with care.</p>
          </div>

          <span className="menu-total">
            {filteredDishes.length}{" "}
            {filteredDishes.length === 1 ? "dish" : "dishes"}
          </span>
        </div>

        {/* Search */}
        <div className="menu-search-area">
          <label htmlFor="menu-search">Search for your favorite meal</label>

          <div className="menu-search-box">
            <span aria-hidden="true">⌕</span>

            <input
              id="menu-search"
              type="search"
              placeholder="Search Doro Wat, Tibs, Shiro..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="menu-filters">
          <span className="filter-label">Categories</span>

          <div className="menu-category-list">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={
                  category === item ? "menu-category active" : "menu-category"
                }
              >
                {item === "All" ? "All Dishes" : item}
              </button>
            ))}
          </div>
        </div>

        {/* Food Cards */}
        <div className="menu-grid">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => <DishCard key={dish.id} dish={dish} />)
          ) : (
            <div className="menu-empty">
              <span>🍽️</span>
              <h3>No dishes found</h3>
              <p>
                We couldn't find a meal matching your search. Try another dish
                or category.
              </p>

              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Show All Dishes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="menu-bottom-banner">
        <span>♡</span>
        <h2>Good Food. Great Moments.</h2>
        <p>
          Enjoy the rich and comforting flavors of Ethiopian cuisine with Addis
          Eats.
        </p>
      </section>
    </main>
  );
}
