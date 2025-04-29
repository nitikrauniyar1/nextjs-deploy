"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#09101a] text-gray-400 pt-10 pb-6 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
      >
        {/* Left Side - Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <span className="text-2xl font-extrabold text-green-400">
            NITIK<span className="text-green-400">.</span>
          </span>
        </motion.div>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {["Home", "About", "Services", "Projects", "Contacts"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Right Side - Social Links */}
        <div className="flex items-center gap-5">
          {/* GitHub */}
          <motion.a
            href="https://github.com/nitikrauniyar1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5-.7.5-.7-.9-1-.7-2.4-.7-2.4 0-1.4 1-2.1 2-2.1 1.1 0 1.7.8 1.9 1.2.7 1.3 2 1 2.5.8.1-.5.3-.8.6-1-.8-.1-1.5-.4-2-.9-.6-.6-.9-1.4-.9-2.3 0-1.7 1.2-3 2.9-3.2 0 0 .9-.2 2.9 1 .5-.1 1-.2 1.5-.2s1 .1 1.5.2c2-1.2 2.9-1 2.9-1 1.7.2 2.9 1.5 2.9 3.2 0 .9-.3 1.7-.9 2.3-.5.5-1.2.8-2 .9.3.2.6.7.6 1.4v2.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://facebook.com/nitikrauniyar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/nitikrauniyar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41a4.92 4.92 0 011.79 1.16 4.92 4.92 0 011.16 1.79c.17.46.354 1.25.41 2.42.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a4.92 4.92 0 01-1.16 1.79 4.92 4.92 0 01-1.79 1.16c-.46.17-1.25.354-2.42.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a4.92 4.92 0 01-1.79-1.16 4.92 4.92 0 01-1.16-1.79c-.17-.46-.354-1.25-.41-2.42C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.96.41-2.42a4.92 4.92 0 011.16-1.79 4.92 4.92 0 011.79-1.16c.46-.17 1.25-.354 2.42-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.014 7.052.072 5.765.13 4.653.344 3.68.693a7.165 7.165 0 00-2.593 1.64A7.165 7.165 0 00.693 4.88C.344 5.853.13 6.965.072 8.252.014 9.532 0 9.935 0 12c0 2.065.014 2.468.072 3.748.058 1.287.272 2.399.621 3.372a7.165 7.165 0 001.64 2.593 7.165 7.165 0 002.593 1.64c.973.349 2.085.563 3.372.621C9.532 23.986 9.935 24 12 24c2.065 0 2.468-.014 3.748-.072 1.287-.058 2.399-.272 3.372-.621a7.165 7.165 0 002.593-1.64 7.165 7.165 0 001.64-2.593c.349-.973.563-2.085.621-3.372C23.986 14.468 24 14.065 24 12c0-2.065-.014-2.468-.072-3.748-.058-1.287-.272-2.399-.621-3.372a7.165 7.165 0 00-1.64-2.593 7.165 7.165 0 00-2.593-1.64c-.973-.349-2.085-.563-3.372-.621C14.468.014 14.065 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/nitik-rauniyar-381873301/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 5 3.88 6 2.5 6S0 5 0 3.5 1.1 1 2.5 1s2.48 1 2.48 2.5zM.5 24h4V8h-4v16zM8.5 8h3.7v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6v9.8h-4V15c0-2.4-.1-5.5-3.3-5.5-3.3 0-3.8 2.5-3.8 5.3v9h-4V8z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-xs text-gray-600 mt-8"
      >
        © {new Date().getFullYear()} Developed with ❤️ by{" "}
        <a
          href="https://nitikrauniyar.com.np/"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          Nitik
        </a>
        . All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
