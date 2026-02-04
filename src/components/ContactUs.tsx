"use client";

import { motion } from "framer-motion";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function ContactUs() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-2">Get In Touch</h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Contact Us</h2>
          <div className="w-16 sm:w-24 h-1 bg-[#5c3b23] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Send us a message</h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5c3b23] transition-colors placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5c3b23] transition-colors placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5c3b23] transition-colors placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5c3b23] transition-colors resize-none placeholder-gray-500 text-sm sm:text-base"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#5c3b23] text-white px-6 sm:px-8 py-3 font-semibold flex items-center justify-center space-x-2 shadow-lg w-full sm:w-auto text-base sm:text-lg"
              >
                <span>Send Message</span>
                <span className="text-lg sm:text-xl">→</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Contact Information</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5c3b23]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#5c3b23]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Address</h4>
                  <p className="text-gray-600 text-sm sm:text-base">123 Leather Lane<br />Craft District, NY 10001</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5c3b23]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#5c3b23]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Phone</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5c3b23]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#5c3b23]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base">info@as-leathers.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5c3b23]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#5c3b23]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Business Hours</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
