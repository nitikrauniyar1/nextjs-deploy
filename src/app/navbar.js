"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/logo.png'; // Your HD logo

// IDs must match your section IDs in the page
const NAV_ITEMS = [
  { id: 'home',     label: 'HOME'     },
  { id: 'about',    label: 'ABOUT'    },
  { id: 'services', label: 'SERVICES' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contacts', label: 'CONTACTS' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [active, setActive]     = useState(NAV_ITEMS[0].label);

  // Scroll-spy: highlight menu item when its section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = NAV_ITEMS.find(item => item.id === id);
            if (match) setActive(match.label);
          }
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    NAV_ITEMS.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Unified click handler: scroll, update hash, close mobile if needed
  const handleNavClick = (id, label) => {
    setActive(label);

    const doScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, "", `#${id}`);
      }
    };

    if (isOpen) {
      // close mobile menu first, then scroll after animation
      setIsOpen(false);
      setTimeout(doScroll, 400); // match the motion.div transition duration
    } else {
      doScroll();
    }
  };

  return (
    <nav className="sticky top-0 backdrop-blur-md bg-opacity-50 bg-[#0b0c10] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo & Brand */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => handleNavClick('home', 'HOME')}
          >
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={120}
              className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
            <span
              className="ml-[-22px] text-3xl font-extrabold relative overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle farthest-side at bottom center, #59CF1A 23%, #9ACF7D 48%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              NITIK
              <span className="shine-effect absolute inset-0 opacity-0 transition-opacity duration-500"></span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map(link => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={e => { e.preventDefault(); handleNavClick(link.id, link.label); }}
                  className={`relative px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none ${
                    active === link.label ? 'text-green-400' : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-green-400"
                    initial={{ width: 0 }}
                    animate={{ width: active === link.label ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hamburger Toggle */}
          <div className="flex lg:hidden -mr-2">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden bg-[#0b0c10] overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map(link => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => { e.preventDefault(); handleNavClick(link.id, link.label); }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none ${
                active === link.label
                  ? 'text-green-400'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, delay: NAV_ITEMS.indexOf(link) * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
