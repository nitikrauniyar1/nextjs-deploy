"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const extras = [
  {
    target: 15,
    description:
      "Creative brand visuals, dynamic event posters, and eye-catching advertising graphics.",
  },
  {
    target: 5,
    description:
      "Next.js and Express.js-powered SaaS solutions with optimal performance and reliability.",
  },
  {
    target: 6,
    description:
      "Websites I've developed for clients, now live and providing seamless user experiences.",
  },
];

function AnimatedNumber({ target }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });
      return controls.stop; // cleanup
    }
  }, [isInView, target, count]);

  return (
    <motion.span
      ref={ref}
      className="text-6xl font-bold text-white"
    >
      {display}+
    </motion.span>
  );
}

export default function ExtrasPage() {
  return (
    <section
      id="extras"
      className="py-16 text-white bg-cover relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center mb-12 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-green-700">
          <span className="shine-effect">Ideas in Action</span>
        </h2>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {extras.map((item, idx) => (
          <motion.div
            key={idx}
            className="card-super-glass p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            variants={cardVariant}
          >
            <AnimatedNumber target={item.target} />
            <p className="text-gray-300 text-lg mt-2">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <style jsx global>{`
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
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.5);
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-10px);
        }

        .shine-effect {
          background: linear-gradient(90deg, #59cf1a, #9acf7d, #59cf1a);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2s linear infinite;
          display: inline-block;
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .bg-cover {
          background-size: cover;
        }
      `}</style>
    </section>
  );
}
