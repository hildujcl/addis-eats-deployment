"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

export default function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navigation = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Cart", href: "/cart" },
  ];

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-icon">♡</span>
          Addis Eats<span className="navbar-logo-dot">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`navbar-link ${isActive(item.href) ? "active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}

              {item.href === "/cart" && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>
          ))}

          <Link
            href="/checkout"
            className={`navbar-order ${isActive("/checkout") ? "active" : ""}`}
            aria-current={isActive("/checkout") ? "page" : undefined}
          >
            Order Now <span>♡</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            tabIndex={menuOpen ? 0 : -1}
            className={`mobile-nav-link ${isActive(item.href) ? "active" : ""}`}
          >
            {item.label}

            {item.href === "/cart" && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        ))}

        <Link
          href="/checkout"
          tabIndex={menuOpen ? 0 : -1}
          className="mobile-order-button"
        >
          Order Now ♡
        </Link>
      </div>
    </header>
  );
}
