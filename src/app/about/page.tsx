"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from '@/components/Footer';
import { 
  CheckCircleIcon, 
  HeartIcon, 
  UserGroupIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[80vh] sm:h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/HomePage/backgroundImage.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60"></div>
        
        {/* Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-gray-900 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl mb-2 block" 
            style={{ fontFamily: 'var(--font-bodoni-moda)' }}
          >
            EST. 1985
          </motion.p>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-bold mb-4 block" 
            style={{ fontFamily: 'var(--font-bodoni-moda)' }}
          >
            Timeless <br /><span style={{ color: '#5c3b23' }}>Craftsmanship</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Handcrafted leather bags for the modern professional. Each piece tells a story of tradition and elegance.
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5C3B23] text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold flex items-center justify-center space-x-2 shadow-lg w-full sm:w-auto"
              >
                <span>Shop Collection</span>
                <span className="text-lg sm:text-xl">→</span>
              </motion.button>
            </Link>
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

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                Our Heritage
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Since 1985, AS-Leather has been dedicated to the art of fine leather craftsmanship. 
                What began as a small workshop has grown into a trusted name in premium leather goods, 
                serving professionals who value quality, durability, and timeless style.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Our master craftsmen combine traditional techniques with modern innovations to create 
                pieces that are not just accessories, but investments in quality that last a lifetime.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#5c3b23' }}>38+</div>
                  <div className="text-sm text-stone-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#5c3b23' }}>50K+</div>
                  <div className="text-sm text-stone-600">Happy Customers</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <img
                src="/About Us/image.jpg"
                alt="Heritage - AS Leather craftsmanship"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
        style={{ backgroundColor: '#ebe0d6' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm uppercase tracking-widest mb-2"
            style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
          >
            What Drives Us
          </motion.p>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16" 
            style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Precision",
                description: "Every stitch, every cut, every detail is executed with unwavering precision and attention to detail.",
                icon: <CheckCircleIcon className="w-12 h-12" />
              },
              {
                title: "Passion",
                description: "Our artisans pour their hearts into every piece, treating each bag as a work of art.",
                icon: <HeartIcon className="w-12 h-12" />
              },
              {
                title: "Heritage",
                description: "Four decades of knowledge passed down through generations of master craftsmen.",
                icon: <UserGroupIcon className="w-12 h-12" />
              },
              {
                title: "Excellence",
                description: "We never compromise on quality. Each product meets the highest standards before leaving our workshop.",
                icon: <TrophyIcon className="w-12 h-12" />
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center"
              >
                <div className="mb-4" style={{ color: '#5c3b23' }}>{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                  {value.title}
                </h3>
                <p className="text-stone-700 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Milestones Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-stone-50"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-sm uppercase tracking-widest mb-2"
            style={{ color: '#5c3b23' }}
          >
            Our Journey
          </motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
          >
            Milestones
          </motion.h2>

          <div className="relative space-y-8">
            {[
              {
                year: "1985",
                description: "Founded in New York by master craftsman Antonio Rossi"
              },
              {
                year: "1992",
                description: "Expanded to our first dedicated workshop in Brooklyn"
              },
              {
                year: "2003",
                description: "Introduced our signature Executive Messenger line"
              },
              {
                year: "2015",
                description: "Launched sustainable leather sourcing initiative"
              },
              {
                year: "2024",
                description: "Serving over 50,000 professionals worldwide"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <p className="font-bold text-lg md:text-xl"
                    style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
                  {milestone.year}
                </p>
                <p className="text-stone-700">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
