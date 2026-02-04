"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  StarIcon, 
  TruckIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from './Footer';

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Strong And Elastic",
      subtitle: "Most Delicate Leather",
      buttonText: "Shop Now",
      brand: "International Leather"
    },
    {
      title: "Water-Repellent Qualities",
      subtitle: "",
      buttonText: "Trending Products",
      brand: "International Leather"
    },
    {
      title: "Baguette Bag",
      subtitle: "High Quality",
      buttonText: "About Us",
      brand: "International Leather"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/HeroSection/heroVideo.mp4" type="video/mp4" />
        </video>
        
        {/* Color Overlay */}
        <div className="absolute inset-0 w-full bg-[#5c3b23]/50"></div>
        
        {/* Slideshow Content */}
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full"
        >
          <p className="text-lg sm:text-xl mb-4" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>
            {slides[currentSlide].brand}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>
            {slides[currentSlide].title}
          </h1>
          {slides[currentSlide].subtitle && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-5 border-[#5c3b23] text-white px-4 sm:px-6 lg:px-8 py-3 text-sm sm:text-base lg:text-lg font-semibold flex items-center justify-center space-x-2 shadow-lg mx-auto"
          >
            <span>{slides[currentSlide].buttonText}</span>
            <span className="text-base sm:text-lg lg:text-xl">→</span>
          </motion.button>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.section>

      {/* Features Section */} 
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#5C3B23] py-8 sm:py-12 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Feature 1: Premium Quality */} 
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4 text-center sm:text-left"
            >
              {/* Icon: Award/Quality */} 
              <div className="w-10 h-10 flex items-center justify-center mb-3 sm:mb-0">
                <StarIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>Premium Quality</h3>
                <p className="text-xs sm:text-sm">Full-grain Italian leather</p>
              </div>
            </motion.div>

            {/* Feature 2: Free Shipping */} 
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4 text-center sm:text-left"
            >
              {/* Icon: Shipping Truck */} 
              <div className="w-10 h-10 flex items-center justify-center mb-3 sm:mb-0">
                <TruckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>Free Shipping</h3>
                <p className="text-xs sm:text-sm">On orders over $300</p>
              </div>
            </motion.div>

            {/* Feature 3: Lifetime Warranty */} 
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4 text-center sm:text-left"
            >
              {/* Icon: Shield */} 
              <div className="w-10 h-10 flex items-center justify-center mb-3 sm:mb-0">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>Lifetime Warranty</h3>
                <p className="text-xs sm:text-sm">We stand behind our craft</p>
              </div>
            </motion.div>

            {/* Feature 4: Sustainable */} 
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4 text-center sm:text-left"
            >
              {/* Icon: Leaf/Eco */} 
              <div className="w-10 h-10 flex items-center justify-center mb-3 sm:mb-0">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>Sustainable</h3>
                <p className="text-xs sm:text-sm">Eco-conscious production</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeless Craftsmanship Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative min-h-[80vh] sm:h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/HomePage/backgroundImage.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 text-left text-gray-900 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl mb-2 block" 
            style={{ fontFamily: 'var(--font-bodoni-moda)' }}
          >
            EST. 1985
          </motion.p>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-bold mb-4 block" 
            style={{ fontFamily: 'var(--font-bodoni-moda)' }}
          >
            Timeless <br /><span style={{ color: '#5c3b23' }}>Craftsmanship</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-lg"
          >
            Handcrafted leather bags for the modern professional. Each piece tells a story of tradition and elegance.
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5C3B23] text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold flex items-center justify-center space-x-2 shadow-lg w-full sm:w-auto"
            >
              <span>Shop Collection</span>
              <span className="text-lg sm:text-xl">→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-[#5C3B23] text-[#5C3B23] px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto"
            >
              Our Story
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Bestsellers Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-gray-600 mb-2"
          >
            Curated Selection
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" 
            style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
          >
            Bestsellers
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Product Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 relative aspect-square group cursor-pointer"
            >
              <span className="absolute top-4 left-4 bg-[#5c3b23] text-white text-xs px-3 py-1 z-10">BESTSELLER</span>
              <img 
                src="/Products/1.jpeg" 
                alt="Executive Messenger Bag" 
                className="w-full h-full object-cover mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-4 transition-opacity duration-300 group-hover:bg-opacity-100">
                <p className="text-xs sm:text-sm uppercase text-gray-500 mb-2">Messenger Bags</p>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Executive Messenger</h3>
                <p className="text-base sm:text-lg font-bold" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>$485</p>
              </div>
              {/* Cart Icon - Appears on hover */}
              <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ShoppingBagIcon className="w-6 h-6 text-[#5c3b23]" />
              </div>
            </motion.div>

            {/* Product Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 relative aspect-square group cursor-pointer"
            >
              <span className="absolute top-4 left-4 bg-[#5c3b23] text-white text-xs px-3 py-1 z-10">BESTSELLER</span>
              <img 
                src="/Products/2.jpeg" 
                alt="Heritage Briefcase" 
                className="w-full h-full object-cover mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-4 transition-opacity duration-300 group-hover:bg-opacity-100">
                <p className="text-xs sm:text-sm uppercase text-gray-500 mb-2">Briefcases</p>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Heritage Briefcase</h3>
                <p className="text-base sm:text-lg font-bold" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>$595</p>
              </div>
              {/* Cart Icon - Appears on hover */}
              <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ShoppingBagIcon className="w-6 h-6 text-[#5c3b23]" />
              </div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 border-2 border-[#5c3b23] text-[#5c3b23] font-semibold flex items-center space-x-2 mx-auto hover:bg-[#5c3b23] hover:text-white transition-colors duration-300 text-base sm:text-lg"
          >
            <span>View All Products</span>
            <span className="text-lg sm:text-xl">→</span>
          </motion.button>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <Testimonial />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
