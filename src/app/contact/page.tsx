"use client";

import { motion } from "framer-motion";
import Footer from '@/components/Footer';
import { useState } from 'react';
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{ backgroundColor: '#ebe0d6' }}
      >
        {/* Content */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center text-stone-900 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <motion.h5 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-2xl font-semibold mb-6 py-3" 
            style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
          >
            Get In Touch
          </motion.h5>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" 
            style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            We&apos;d love to hear from you. Whether you have a question about our products, 
            need assistance with an order, or just want to say hello.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Form + Info Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#f7f4f1] py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-semibold"
              style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
            >
              Get In Touch
            </h2>
            <p className="text-stone-600 mt-3">We're here to help and answer any questions you might have</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Form */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl font-semibold mb-8"
                style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
              >
                Send us a message
              </h2>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-sm font-semibold text-stone-800">Name</label>
                    <div className="relative">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-white px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#5c3b23] transition-all duration-300 placeholder-stone-400"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-red-600 rounded flex items-center justify-center text-white text-xs select-none">
                        ...
                      </span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-sm font-semibold text-stone-800">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-white px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#5c3b23] transition-all duration-300 placeholder-stone-400"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-stone-800">Subject</label>
                  <motion.select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#5c3b23] transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="product">Product inquiry</option>
                    <option value="order">Order support</option>
                    <option value="custom">Custom request</option>
                    <option value="other">Other</option>
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-stone-800">Message</label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help..."
                    rows={8}
                    className="w-full bg-white px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#5c3b23] transition-all duration-300 resize-none placeholder-stone-400"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(92, 59, 35, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#5c3b23] text-white px-8 py-3 font-semibold shadow-md transition-all duration-300"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Message
                  </motion.span>
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Right: Info Card */}
            <motion.aside
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-[#ebe0d6] p-8 sm:p-10"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-semibold mb-8"
                style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
              >
                Contact Information
              </motion.h3>

              <motion.div 
                className="space-y-7"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: <EnvelopeIcon className="w-6 h-6 text-[#5c3b23]" />,
                    title: "Email",
                    content: "hello@artisanleather.com"
                  },
                  {
                    icon: <PhoneIcon className="w-6 h-6 text-[#5c3b23]" />,
                    title: "Phone",
                    content: "+1 (234) 567-890"
                  },
                  {
                    icon: <MapPinIcon className="w-6 h-6 text-[#5c3b23]" />,
                    title: "Showroom",
                    content: "123 Artisan Way, New York, NY 10001"
                  },
                  {
                    icon: <ClockIcon className="w-6 h-6 text-[#5c3b23]" />,
                    title: "Hours",
                    content: "Mon-Fri: 9AM-6PM EST"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-stone-800/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(92, 59, 35, 0.2)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-lg font-semibold" 
                        style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.div>
                      <div className="text-stone-600">{item.content}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="my-10 h-px w-full bg-stone-800/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <h4
                  className="text-xl sm:text-2xl font-semibold mb-4"
                  style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
                >
                  Visit Our Showroom
                </h4>
                <motion.p 
                  className="text-stone-600 leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Experience our collection in person. Our showroom features our complete range of products,
                  and our knowledgeable staff is ready to help you find the perfect bag.
                </motion.p>
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-[#ebe0d6] p-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2
              className="text-3xl sm:text-4xl font-semibold"
              style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
            >
              Find Us
            </h2>
            <p className="text-stone-600 mt-3">Visit our showroom in the heart of the city</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full h-[360px] sm:h-[420px] lg:h-[520px] border-dotted-8 border-[#5c3b23] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Lahore Map"
                src="https://www.google.com/maps?q=Lahore%2C%20Pakistan&z=13&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#f7f4f1] py-16 sm:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-3"
              style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600">Quick answers to common questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for unused items in original packaging. Custom orders are non-refundable."
              },
              {
                question: "How long does shipping take?",
                answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship worldwide. International orders typically arrive within 10-14 business days."
              },
              {
                question: "How do I care for my leather bag?",
                answer: "We recommend using a quality leather conditioner every 3-6 months. Avoid prolonged exposure to direct sunlight."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f3efe9] p-6 rounded-lg"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 30px rgba(92, 59, 35, 0.1)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}
                >
                  {faq.question}
                </h3>
                <motion.p 
                  className="text-stone-600 text-sm leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
