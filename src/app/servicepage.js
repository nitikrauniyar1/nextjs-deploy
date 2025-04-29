// File: src/app/services/page.js
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceIcon1 from '../../public/service-web.png';
import ServiceIcon2 from '../../public/service-design.png';
import ServiceIcon3 from '../../public/service-seo.png';

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites, e-commerce platforms & web apps powered by Next.js, React & Node.js.',
      icon: ServiceIcon1
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered designs with Figma; prototypes & interfaces that delight.',
      icon: ServiceIcon2
    },
    {
      title: 'SEO Optimization',
      description: 'On-page & technical SEO, performance tuning to boost organic rankings.',
      icon: ServiceIcon3
    }
  ];

  return (
    <section
      id="services"
      className="py-16 text-white bg-cover"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Section Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[rgb(85,230,165)] mb-4">Services</h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Empowering your digital presence with tailored solutions.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1f2937] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center card-3d-flip"
            variants={cardVariant}
          >
            <div className="w-20 h-20 mb-4">
              <Image src={svc.icon} alt={svc.title} width={80} height={80} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{svc.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{svc.description}</p>
            <a href='/#contacts'>
            <button className="mt-auto px-6 py-2 bg-[rgb(85,230,165)] hover:bg-green-500 rounded-full font-medium cursor-pointer transition">
              Contact Us
            </button>
            </a>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
