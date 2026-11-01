"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="cart-page">
      <section className="cart-hero">
        <span className="cart-eyebrow">♡ YOUR FAVORITES</span>
        <h1>
          Your Shopping <span>Cart</span>
        </h1>
        <p>Take a look at your delicious selections before checkout.</p>
      </section>

      <section className="cart-content">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">♡</span>
            <h2>Your cart is waiting!</h2>
            <p>You haven't added any delicious meals yet.</p>
            <Link href="/menu" className="cart-primary-button">
              Explore Our Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-section-heading">
              <div>
                <span className="cart-section-label">YOUR SELECTION</span>
                <h2>Selected Meals</h2>
              </div>
              <span className="cart-count">
                {cart.length} {cart.length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <span className="cart-item-icon">🍽️</span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.price} ETB each</p>
                    </div>
                  </div>

                  <div className="cart-quantity">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    <strong>{item.price * item.quantity} ETB</strong>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-top">
                <div>
                  <span>Order Summary</span>
                  <p>Your delicious choices, all in one place.</p>
                </div>
                <span className="cart-summary-icon">♡</span>
              </div>

              <div className="cart-summary-total">
                <span>Total Amount</span>
                <strong>{cartTotal} ETB</strong>
              </div>

              <Link href="/checkout" className="cart-checkout-button">
                Continue to Checkout <span>→</span>
              </Link>

              <Link href="/menu" className="cart-continue-link">
                ← Continue exploring the menu
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
