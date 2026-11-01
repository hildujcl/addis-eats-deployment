"use client";

import Image from "next/image";
import { useCart } from "./CartProvider";

export default function DishCard({ dish }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(dish);
  }

  return (
    <article className="dish-card">
      {/* Food Image */}
      <div className="dish-image">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="dish-photo"
        />

        {dish.popular && <span className="popular-badge">♡ Popular</span>}
      </div>

      {/* Dish Information */}
      <div className="dish-content">
        <div className="dish-card-top">
          <span className="dish-category">{dish.category}</span>

          <span className="dish-heart" aria-hidden="true">
            ♡
          </span>
        </div>

        <h3>{dish.name}</h3>

        <p className="dish-description">{dish.description}</p>

        {/* Price and Cart Button */}
        <div className="dish-footer">
          <div className="dish-price">
            <span>Price</span>
            <strong>{dish.price} ETB</strong>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="add-cart-button"
            aria-label={`Add ${dish.name} to cart`}
          >
            <span aria-hidden="true">+</span>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
