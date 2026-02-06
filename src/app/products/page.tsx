"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import ProductFilters from '@/components/ProductFilters';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import FlyingCart from '@/components/FlyingCart';
import { useCart } from '@/contexts/CartContext';

// Mock product data
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

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [wishlistedItems, setWishlistedItems] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();
  const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({
    message: '',
    isVisible: false
  });
  const [flyingCart, setFlyingCart] = useState<{
    startRect: DOMRect | null;
    endRect: DOMRect | null;
    image: string;
  }>({
    startRect: null,
    endRect: null,
    image: ''
  });

  const handleFilterChange = (category: string) => {
    if (category === 'All Products') {
      setFilteredProducts(mockProducts);
    } else {
      // Filter logic based on category
      const filtered = mockProducts.filter(product => {
        if (category === 'Bags') return product.name.toLowerCase().includes('bag') || product.name.toLowerCase().includes('briefcase') || product.name.toLowerCase().includes('backpack') || product.name.toLowerCase().includes('messenger') || product.name.toLowerCase().includes('duffel');
        if (category === 'Wallets') return product.name.toLowerCase().includes('wallet');
        if (category === 'Accessories') return product.name.toLowerCase().includes('portfolio');
        return true;
      });
      setFilteredProducts(filtered);
    }
  };

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredProducts];
    switch (sort) {
      case 'Price: Low to High':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'New Arrivals':
        sorted.sort((a, b) => (a.badge === 'New' ? -1 : b.badge === 'New' ? 1 : 0));
        break;
      default: // Featured
        // Keep original order or implement featured logic
        break;
    }
    setFilteredProducts(sorted);
  };

  const handleWishlistToggle = (productId: string) => {
    setWishlistedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleAddToCart = (productId: string, event: React.MouseEvent) => {
    // Get the cart button element that was clicked
    const button = event.currentTarget as HTMLElement;
    const productCard = button.closest('.group') as HTMLElement;
    const productImage = productCard?.querySelector('img') as HTMLImageElement;
    
    // Get cart icon in navigation
    const cartIcon = document.querySelector('[data-cart-icon]') as HTMLElement;
    
    console.log('Product image:', productImage);
    console.log('Cart icon:', cartIcon);
    
    if (productImage && cartIcon) {
      const startRect = productImage.getBoundingClientRect();
      const endRect = cartIcon.getBoundingClientRect();
      
      console.log('Start rect:', startRect);
      console.log('End rect:', endRect);
      
      // Set up flying cart animation
      const product = mockProducts.find(p => p.id === productId);
      const flyingCartData = {
        startRect,
        endRect,
        image: product?.image || ''
      };
      
      console.log('Flying cart data:', flyingCartData);
      
      setFlyingCart(flyingCartData);
    } else {
      console.log('Missing elements for animation');
    }
    
    // Add to cart
    addToCart(productId);
    
    // Show toast notification after a short delay
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === productId);
      setToast({
        message: product?.name || 'Product',
        isVisible: true
      });
    }, 400); // Show toast after animation starts
    
    console.log(`Product ${productId} added to cart`);
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const completeFlyingCart = () => {
    setFlyingCart({
      startRect: null,
      endRect: null,
      image: ''
    });
  };

  return (
    <div className="pt-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          pretitle="THE COLLECTION"
          title="Our Products"
          subtitle="Discover our range of handcrafted leather bags, each designed for the modern professional"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        <ProductFilters
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </motion.div>
      
      {/* Products Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <ProductCard
                  {...product}
                  isWishlisted={wishlistedItems.has(product.id)}
                  onWishlistToggle={handleWishlistToggle}
                  onAddToCart={handleAddToCart}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <AnimatePresence>
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-stone-600 text-lg">No products found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <Footer />
      
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
      
      {flyingCart.startRect && flyingCart.endRect && (
        <FlyingCart
          startRect={flyingCart.startRect}
          endRect={flyingCart.endRect}
          image={flyingCart.image}
          onComplete={completeFlyingCart}
        />
      )}
    </div>
  );
};

export default ProductsPage;
