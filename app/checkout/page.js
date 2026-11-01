import OrderForm from "@/components/OrderForm";

export const metadata = {
  title: "Checkout",
  description: "Complete your Addis Eats demo order.",
};

export default function CheckoutPage() {
  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <span className="checkout-eyebrow">♡ ALMOST THERE</span>

        <h1>
          Complete Your
          <span> Order</span>
        </h1>

        <p>
          Just a few more details before you enjoy your favorite Ethiopian
          meals.
        </p>
      </section>

      <section className="checkout-content">
        <div className="checkout-card">
          <div className="checkout-card-heading">
            <span className="checkout-icon">🛍️</span>

            <div>
              <h2>Your Order Details</h2>
              <p>Enter your information below.</p>
            </div>
          </div>

          <OrderForm />
        </div>

        <p className="checkout-note">♡ Thank you for choosing Addis Eats!</p>
      </section>
    </main>
  );
}
