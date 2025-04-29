"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ContactPage() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7cahvuw', // Your EmailJS service ID
        'template_uwhr118', // Your EmailJS template ID
        formRef.current,
        '9DKhv51gdgOrrs9mO' // Your EmailJS public key
      )
      .then(
        (result) => {
          alert('✅ Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('EmailJS Error:', error?.text || error);
          alert('❌ Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contacts"
      className="min-h-screen flex items-center bg-cover justify-center py-16 overflow-hidden px-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <motion.div
        className="card-super-glass w-full max-w-xl mx-auto p-10 rounded-2xl"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fieldVariant} className="text-4xl font-bold text-[rgb(85,230,165)] mb-6 text-center">
          Contact Us
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={containerVariant}
        >
          <motion.div variants={fieldVariant} className="relative">
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[rgb(85,230,165)] transition"
            />
          </motion.div>

          <motion.div variants={fieldVariant} className="relative">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[rgb(85,230,165)] transition"
            />
          </motion.div>

          <motion.div variants={fieldVariant} className="relative">
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[rgb(85,230,165)] transition resize-none"
            />
          </motion.div>

          <motion.div variants={fieldVariant} className="text-center">
            <button
              type="submit"
              className="btn-3d-super bg-[rgb(85,230,165)] px-8 py-3 font-semibold rounded-lg text-white outline-none"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}