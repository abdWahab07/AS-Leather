"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  XMarkIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock product data - this should match the products page data
const mockProducts = [
  {
    id: '1',
    name: 'Classic Leather Briefcase',
    price: 299,
    originalPrice: 399,
    image: '/Products/1.jpeg',
    badge: 'Sale',
  },
  {
    id: '2',
    name: 'Premium Leather Backpack',
    price: 249,
    image: '/Products/2.jpeg',
    badge: 'New',
  },
  {
    id: '3',
    name: 'Executive Leather Portfolio',
    price: 189,
    image: '/Products/3.jpeg',
  },
  {
    id: '4',
    name: 'Vintage Leather Messenger Bag',
    price: 329,
    originalPrice: 429,
    image: '/Products/4.jpeg',
    badge: 'Sale',
  },
  {
    id: '5',
    name: 'Slim Leather Wallet',
    price: 89,
    image: '/Products/5.jpeg',
  },
  {
    id: '6',
    name: 'Leather Travel Duffel',
    price: 449,
    image: '/Products/1.jpeg',
    badge: 'Limited',
  },
];

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  // Get cart items with full product details
  const cartItemsWithDetails = Array.from(cartItems).map(productId => {
    const product = mockProducts.find(p => p.id === productId);
    return product ? {
      ...product,
      quantity: quantities[productId] || 1
    } : null;
  }).filter(Boolean) as (typeof mockProducts[0] & { quantity: number })[];

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      const newQuantities = { ...quantities };
      delete newQuantities[productId];
      setQuantities(newQuantities);
    } else {
      setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
    }
  };

  const removeItem = (productId: string) => {
    removeFromCart(productId);
    const newQuantities = { ...quantities };
    delete newQuantities[productId];
    setQuantities(newQuantities);
  };

  const subtotal = cartItemsWithDetails.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 300 ? 0 : 25;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-3">
                <ShoppingBagIcon className="w-6 h-6 text-[#5c3b23]" />
                <h2 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                  Shopping Cart
                </h2>
                <span className="bg-[#5c3b23] text-white text-xs px-2 py-1 rounded-full" >
                  {cartItemsWithDetails.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItemsWithDetails.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBagIcon className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some premium leather goods to get started!</p>
                  <button
                    onClick={onClose}
                    className="bg-[#5c3b23] text-white px-6 py-2 rounded-lg hover:bg-[#5c3b23]/90 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItemsWithDetails.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="flex space-x-4 p-3 bg-gray-50 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">{item.badge || 'Leather Goods'}</p>
                        <p className="font-semibold text-[#5c3b23]" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 rounded transition-colors mb-2"
                        >
                          <TrashIcon className="w-4 h-4 text-red-500" />
                        </button>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-100 transition-colors border-[#5c3b23] text-[#5c3b23]"
                          >
                            <MinusIcon className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-100 transition-colors border-[#5c3b23] text-[#5c3b23]"
                          >
                            <PlusIcon className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItemsWithDetails.length > 0 && (
              <div className="border-t p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>Subtotal</span>
                  <span className="font-medium" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>Shipping</span>
                  <span className="font-medium" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>Tax</span>
                  <span className="font-medium" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-3 border-t">
                  <span style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Total</span>
                  <span className="text-[#5c3b23]" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-2 pt-3">
                  <button className="w-full bg-[#5c3b23] text-white py-3 rounded-lg font-medium hover:bg-[#5c3b23]/90 transition-colors">
                    Checkout
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full border border-[#5c3b23] text-[#5c3b23] py-3 rounded-lg font-medium hover:bg-[#5c3b23]/10 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
