"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  cartItems: Set<string>;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Set<string>>(new Set());

  const addToCart = (productId: string) => {
    setCartItems(prev => {
      const newSet = new Set(prev);
      newSet.add(productId);
      return newSet;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(productId);
      return newSet;
    });
  };

  const getCartCount = () => {
    return cartItems.size;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
