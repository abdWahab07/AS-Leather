"use client";

import { motion } from "framer-motion";
import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Company",
      content: "The craftsmanship is absolutely exceptional. My leather briefcase has become my most prized possession.",
      rating: 5,
      image: "/testimonial1.jpg" // You can add actual images later
    },
    {
      name: "Michael Chen",
      role: "Architect",
      content: "I've been searching for the perfect leather bag for years. AS-Leather exceeded all my expectations.",
      rating: 5,
      image: "/testimonial2.jpg" // You can add actual images later
    },
    {
      name: "Emily Rodriguez",
      role: "Fashion Designer",
      content: "The attention to detail and quality of materials is unmatched. Worth every penny!",
      rating: 5,
      image: "/testimonial3.jpg" // You can add actual images later
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#5c3b23]/10 via-[#5c3b23]/5 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-2">What Our Customers Say</h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>Testimonials</h2>
          <div className="w-16 sm:w-24 h-1 bg-[#5c3b23] mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-5 border-[#5c3b23]/90"
            >
              {/* Rating Stars */}
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>"{testimonial.content}"</p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-base sm:text-xl font-semibold text-gray-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
