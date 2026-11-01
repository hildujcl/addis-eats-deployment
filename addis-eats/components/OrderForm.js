"use client";

import { useRef, useState } from "react";
import { useCart } from "./CartProvider";

function saveDemoOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...order,
        status: "received",
      });
    }, 1500);
  });
}

export default function OrderForm() {
  const { cart, cartTotal, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [notes, setNotes] = useState("");

  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submittingRef = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (submittingRef.current) return;

    if (cart.length === 0) {
      setMessage("Please add a meal to your cart first.");
      setSuccess(false);
      return;
    }

    const validPhone = /^(09\d{8}|\+2519\d{8})$/;

    if (!validPhone.test(phone.trim())) {
      setMessage("Please enter a valid Ethiopian mobile number.");
      setSuccess(false);
      return;
    }

    submittingRef.current = true;
    setPending(true);
    setMessage("");
    setSuccess(false);

    try {
      const order = {
        name: name.trim(),
        phone: phone.trim(),
        area: area.trim(),
        notes: notes.trim(),
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: cartTotal,
      };

      const result = await saveDemoOrder(order);

      setMessage(
        `Thank you, ${result.name}! Your demo order has been received.`,
      );

      setSuccess(true);
      clearCart();

      setName("");
      setPhone("");
      setArea("");
      setNotes("");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      submittingRef.current = false;
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="order-form">
      {/* Order Summary */}
      <div className="order-summary">
        <div className="order-summary-heading">
          <span>🛍️</span>
          <div>
            <h3>Your Selected Meals</h3>
            <p>Review your order before continuing.</p>
          </div>
        </div>

        {cart.length > 0 ? (
          <div className="order-items">
            {cart.map((item) => (
              <div className="order-item" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <span>Quantity: {item.quantity}</span>
                </div>

                <strong>{item.price * item.quantity} ETB</strong>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-order">
            <span>🍽️</span>
            <p>Your cart is currently empty.</p>
            <a href="/menu">Explore our menu →</a>
          </div>
        )}

        <div className="order-total">
          <span>Order Total</span>
          <strong>{cartTotal} ETB</strong>
        </div>
      </div>

      {/* Customer Information */}
      <div className="form-section-heading">
        <span>01</span>
        <div>
          <h3>Customer Information</h3>
          <p>Tell us where to deliver your order.</p>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="customer-name">Full Name</label>
        <input
          id="customer-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          disabled={pending}
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="customer-phone">TeleBirr Phone Number</label>
        <input
          id="customer-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          disabled={pending}
          placeholder="09XXXXXXXX or +2519XXXXXXXX"
        />
        <span className="field-hint">
          Enter a valid Ethiopian mobile number.
        </span>
      </div>

      <div className="form-field">
        <label htmlFor="delivery-area">Delivery Area</label>
        <input
          id="delivery-area"
          name="area"
          type="text"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          required
          disabled={pending}
          placeholder="Enter your delivery area"
        />
      </div>

      <div className="form-field">
        <label htmlFor="order-notes">
          Additional Notes
          <span> (Optional)</span>
        </label>

        <textarea
          id="order-notes"
          name="notes"
          rows={4}
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          disabled={pending}
          placeholder="Any special instructions?"
        />
      </div>

      {/* Payment Notice */}
      <div className="demo-payment-notice">
        <span>ℹ️</span>
        <p>
          This is a demonstration checkout. No actual payment will be processed
          or charged.
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending || cart.length === 0}
        className="place-order-button"
      >
        {pending ? "Processing Your Order..." : "Place Order ♡"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={success ? "order-message success" : "order-message"}
      >
        {message}
      </p>
    </form>
  );
}
