"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CartSidebar from "./CartSidebar";
import { useCart } from "@/contexts/CartContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Left Border */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-wide"
              style={{ fontFamily: 'var(--font-satisfy)', color: '#5c3b23' }}
            >
              as-leathers
            </motion.div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors font-bold text-sm tracking-wide"
                    style={{ fontFamily: 'var(--font-bodoni-moda)' }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Shopping Bag Icon - Right Border */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-[#5c3b23] transition-colors relative p-2 z-10"
                data-cart-icon
              >
                <ShoppingBagIcon className="w-6 h-6" aria-hidden="true" />
                {/* Cart Badge */}
                <span className="absolute -top-1 -right-1 bg-[#5c3b23] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-900"
              >
                <div className="space-y-1">
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                    className="w-6 h-0.5 bg-current"
                  />
                  <motion.div
                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                    className="w-6 h-0.5 bg-current"
                  />
                  <motion.div
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                    className="w-6 h-0.5 bg-current"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ x: 5 }}
              >
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 transition-colors font-bold text-sm tracking-wide py-2"
                  style={{ fontFamily: 'var(--font-bodoni-moda)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
