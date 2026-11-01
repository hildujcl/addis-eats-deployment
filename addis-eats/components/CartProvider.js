"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load the saved cart from localStorage.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("addisEatsCart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          const validCart = parsedCart
            .filter(
              (item) =>
                item &&
                item.id !== undefined &&
                typeof item.price === "number" &&
                Number.isFinite(item.price),
            )
            .map((item) => ({
              ...item,
              quantity:
                Number.isInteger(item.quantity) && item.quantity > 0
                  ? item.quantity
                  : 1,
            }));

          setCart(validCart);
        }
      }
    } catch (error) {
      console.error("Unable to load saved cart:", error);
      localStorage.removeItem("addisEatsCart");
    }

    setLoaded(true);
  }, []);

  // Save the cart whenever it changes.
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("addisEatsCart", JSON.stringify(cart));
    }
  }, [cart, loaded]);

  // Add a dish or increase its quantity.
  function addToCart(dish) {
    setCart((previousCart) => {
      const existingDish = previousCart.find((item) => item.id === dish.id);

      if (existingDish) {
        return previousCart.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item,
        );
      }

      return [...previousCart, { ...dish, quantity: 1 }];
    });
  }

  // Update dish quantity.
  function updateQuantity(id, quantity) {
    const safeQuantity = Math.floor(Number(quantity));

    if (!Number.isFinite(safeQuantity)) return;

    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id ? { ...item, quantity: safeQuantity } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // Remove a dish.
  function removeFromCart(id) {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  }

  // Clear the entire cart.
  function clearCart() {
    setCart([]);
  }

  // Calculate the total number of meals.
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price.
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for accessing cart information.
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
