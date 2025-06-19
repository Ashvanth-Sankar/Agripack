
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to cart with quantity
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already in cart, increase its quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new item, add with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Remove item from cart entirely
  const removeFromCart = (itemToRemove) =>
    setCartItems((prev) => prev.filter((item) => item.id !== itemToRemove.id));

  // ✅ New: Update quantity by delta (+1 or -1)
  const updateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};


