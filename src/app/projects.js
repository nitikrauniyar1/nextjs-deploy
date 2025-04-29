"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Projects Data
const projects = [
  {
    title: 'Weather App',
    description: 'Real-time weather forecasts with geolocation and animated backgrounds, built using React and OpenWeatherMap API.',
    icon: '/weather.png'
  },
  {
    title: 'To-Do List',
    description: 'Task manager featuring drag-and-drop, localStorage persistence, and a dark/light mode toggle.',
    icon: '/todo-app.png'
  },
  {
    title: 'Personal Portfolio',
    description: 'My engineering showcase built with Next.js, highlighting skills, projects, and contact integration.',
    icon: '/portfolio.png'
  },
  {
    title: 'E-Commerce Store',
    description: 'Responsive online store with product catalog, shopping cart, and Stripe payment integration.',
    icon: '/ecommerce.png'
  },
  {
    title: 'Chat Application (In Progress)',
    description: 'Real-time chat app leveraging Socket.io, Node.js backend, and React frontend.',
    icon: '/chat-app.png'
  },
  {
    title: 'Blog Platform',
    description: 'Content management system with Markdown support, user authentication, and comments.',
    icon: '/blog.png'
  }
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-16 text-white bg-cover" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Animated Gradient Background */}
      <div className="absolute pointer-events-none"></div>

      {/* Section Title */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center mb-12 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-green-700">
          <span className="shine-effect">Projects</span>
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="card-super-glass p-6 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer"
            variants={cardVariant}
          >
            <div className="w-16 h-16 mb-4">
              <Image src={proj.icon} alt={proj.title} width={64} height={64} />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{proj.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{proj.description}</p>
            <a href='https://github.com/nitikrauniyar1' target='_blank'>
            <button className="btn-3d-super bg-[rgb(85,230,165)] px-5 py-2 rounded-full font-medium text-white outline-none">
              View Project
            </button>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        /* Glassmorphism + 3D Popout Effect */
        .card-super-glass {
           background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2rem;
  color: white;
  font-family: 'Poppins', sans-serif;
  transform-style: preserve-3d;
  transition: transform 0.8s ease, box-shadow 0.8s ease, background 0.5s ease;
        }
        .card-super-glass:hover {
          animation: superPop3d 1s ease forwards;
        }
        .card-super-glass:not(:hover) {
          animation: unpop3d 1s ease forwards;
        }
        @keyframes superPop3d {
          0% {
            transform: perspective(1200px) translateZ(0) rotateX(0deg) rotateY(0deg) scale(1);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
            background: rgba(255, 255, 255, 0.05);
          }
          40% {
            transform: perspective(1200px) translateZ(80px) rotateX(10deg) rotateY(-10deg) scale(1.05);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
            background: rgba(255, 255, 255, 0.08);
          }
          100% {
            transform: perspective(1200px) translateZ(80px) rotateX(10deg) rotateY(-10deg) scale(1.05);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
            background: rgba(255, 255, 255, 0.08);
          }
        }
        @keyframes unpop3d {
          0% {
            transform: perspective(1200px) translateZ(80px) rotateX(10deg) rotateY(-10deg) scale(1.05);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
            background: rgba(255, 255, 255, 0.08);
          }
          100% {
            transform: perspective(1200px) translateZ(0) rotateX(0deg) rotateY(0deg) scale(1);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
            background: rgba(255, 255, 255, 0.05);
          }
        }

        /* 3D Button Pop Effect */
        .btn-3d-super {
         
          border: none;
          position: relative;
          color: #fff;
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .btn-3d-super:hover {
          animation: btnPop 0.6s forwards;
        }
        .btn-3d-super:not(:hover) {
          animation: btnUnpop 0.6s forwards;
        }
        @keyframes btnPop {
          0% {
            transform: translateZ(0) scale(1);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          }
          100% {
            transform: translateZ(20px) scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          }
        }
        @keyframes btnUnpop {
          0% {
            transform: translateZ(20px) scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          }
          100% {
            transform: translateZ(0) scale(1);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          }
        }

        /* Text Shine Effect */
        .shine-effect {
          background: linear-gradient(90deg, #59cf1a, #9acf7d, #59cf1a);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2s linear infinite;
          display: inline-block;
        }
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Slow Gradient Animation */
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
