"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import Toast from '@/components/Toast';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

// Mock product data - same as products page
const mockProducts = [
  {
    id: '1',
    name: 'Classic Leather Briefcase',
    price: 299,
    originalPrice: 399,
    image: '/Products/1.jpeg',
    badge: 'Sale',
    description: 'A timeless classic crafted from premium full-grain leather. This briefcase features multiple compartments for organization, comfortable leather handles, and a removable shoulder strap. Perfect for the modern professional who values both style and functionality.',
    features: [
      'Premium full-grain leather',
      'Multiple interior compartments',
      'Adjustable shoulder strap',
      'Brass hardware',
      'Hand-stitched detailing'
    ],
    dimensions: '16" x 12" x 4"',
    material: 'Full-grain leather'
  },
  {
    id: '2',
    name: 'Premium Leather Backpack',
    price: 249,
    image: '/Products/2.jpeg',
    badge: 'New',
    description: 'Combining rugged durability with sophisticated style, this leather backpack is perfect for both daily commutes and weekend adventures. Features a padded laptop sleeve and multiple pockets for organization.',
    features: [
      'Padded laptop sleeve (fits 15")',
      'Multiple exterior pockets',
      'Leather bottom panel',
      'Adjustable shoulder straps',
      'YKK zippers'
    ],
    dimensions: '18" x 12" x 6"',
    material: 'Top-grain leather'
  },
  {
    id: '3',
    name: 'Executive Leather Portfolio',
    price: 189,
    image: '/Products/3.jpeg',
    description: 'Elegant and professional, this leather portfolio is perfect for meetings and presentations. Features a slim design that holds documents, tablet, and business cards with ease.',
    features: [
      'Slim profile design',
      'Tablet pocket (fits 12")',
      'Business card holder',
      'Pen holders',
      'Magnetic closure'
    ],
    dimensions: '14" x 10" x 1"',
    material: 'Genuine leather'
  },
  {
    id: '4',
    name: 'Vintage Leather Messenger Bag',
    price: 329,
    originalPrice: 429,
    image: '/Products/4.jpeg',
    badge: 'Sale',
    description: 'Inspired by classic messenger bags, this vintage-style piece combines old-world charm with modern functionality. Perfect for carrying your essentials in style.',
    features: [
      'Vintage-inspired design',
      'Cross-body strap',
      'Front flap closure',
      'Interior organizer',
      'Antique brass hardware'
    ],
    dimensions: '15" x 11" x 4"',
    material: 'Distressed leather'
  },
  {
    id: '5',
    name: 'Slim Leather Wallet',
    price: 89,
    image: '/Products/5.jpeg',
    description: 'Minimalist design meets maximum functionality. This slim leather wallet holds your essentials without the bulk, featuring RFID protection and premium leather construction.',
    features: [
      'RFID protection',
      'Slim profile',
      'Multiple card slots',
      'Bill compartment',
      'Gift box included'
    ],
    dimensions: '4.25" x 3" x 0.25"',
    material: 'Nappa leather'
  },
  {
    id: '6',
    name: 'Leather Travel Duffel',
    price: 449,
    image: '/Products/1.jpeg',
    badge: 'Limited',
    description: 'The perfect travel companion for weekend getaways. This leather duffel bag combines rugged durability with sophisticated style, featuring premium leather and thoughtful design details.',
    features: [
      'Weekend capacity',
      'Detachable shoulder strap',
      'Interior zip pocket',
      'Metal feet for protection',
      'Limited edition'
    ],
    dimensions: '22" x 11" x 11"',
    material: 'Full-grain leather'
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [toast, setToast] = useState<{ message: string; isVisible: boolean }>({
    message: '',
    isVisible: false
  });

  const product = mockProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-stone-600 hover:text-stone-900">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id);
    setToast({
      message: product.name,
      isVisible: true
    });
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: product.name }
  ];

  return (
    <div className="pt-16 bg-white min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-stone-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Additional images could go here */}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.badge && (
                <span className="inline-block bg-stone-800 text-white text-sm px-3 py-1 rounded-full mb-4">
                  {product.badge}
                </span>
              )}
              <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                  ${product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-lg text-stone-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-stone-700">Quantity:</label>
              <div className="flex items-center border border-stone-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-stone-100 transition-colors text-stone-700 font-medium"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-stone-300 min-w-[60px] text-center font-medium" style={{ color: '#5c3b23' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-stone-100 transition-colors text-stone-700 font-medium"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 border-2 py-3 px-6 rounded-lg font-medium transition-colors hover:bg-stone-50"
                style={{ borderColor: '#5c3b23', color: '#5c3b23' }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-3 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
              >
                {isWishlisted ? (
                  <HeartSolidIcon className="w-6 h-6 text-red-500" />
                ) : (
                  <HeartIcon className="w-6 h-6 text-stone-600" />
                )}
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                Product Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-900 mb-2">Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-stone-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-stone-900">Dimensions:</span>
                    <p className="text-stone-700">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="font-medium text-stone-900">Material:</span>
                    <p className="text-stone-700">{product.material}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </div>
  );
}
