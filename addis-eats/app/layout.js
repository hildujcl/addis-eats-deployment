import "./globals.css";

import Header from "@/components/Header";
import { CartProvider } from "@/components/CartProvider";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),

  title: {
    default: "Addis Eats | Delicious Ethiopian Food",
    template: "%s | Addis Eats",
  },

  description:
    "Discover delicious Ethiopian meals and enjoy a beautiful food ordering experience with Addis Eats.",

  applicationName: "Addis Eats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />

          {children}

          <footer className="site-footer">
            <p className="footer-brand">Addis Eats ♡</p>

            <p className="footer-description">
              Delicious Ethiopian flavors, made with love.
            </p>

            <p className="footer-copyright">
              © {new Date().getFullYear()} Addis Eats. All rights reserved.
            </p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
