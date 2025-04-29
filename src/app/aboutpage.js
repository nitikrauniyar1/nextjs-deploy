"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PlayIcon from '../../public/play.svg';
import emailjs from '@emailjs/browser';

// Updated education, experience & skills
const education = [
  {
    year: '2022',
    title: '10th Grade',
    institution: 'Shankar Shishu Sadan English Boarding School, Janakpur',
  },
  {
    year: '2022 - 2024',
    title: '+2 (Higher Secondary)',
    institution: 'Model Multiple College, Janakpur',
  },
  {
    year: '2024 - Present',
    title: 'B.E. Electronics, Communication & Information Engineering',
    institution: 'Institute of Engineering, Dharan',
  },
];

const experience = [
  {
    year: 'Apr 2023 - Present',
    title: 'Web Developer (Part-time)',
    company: 'Trinity Life Sciences (Remote)',
    details: 'Nord.js, React.js, Backend, etc.',
  },
  {
    year: 'Apr 2020 - May 2022',
    title: 'Web Developer (Full-time)',
    company: 'Udetytech, Janakpur, Nepal',
    details: 'WordPress, PHP, Magento, etc.',
  },
];

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 90 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Node.js', level: 89 },
  { name: 'PHP', level: 86 },
  { name: 'Express.js', level: 80 },
  { name: 'MySQL', level: 85 },
  { name: 'MongoDB', level: 87 },
];

const timelineVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

export default function AboutPage() {
  return (
    <section
        id='about'
      className="flex flex-col items-center bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Who Am I */}
      <motion.div
        className="w-full max-w-4xl text-center px-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={timelineVariant}
        custom={0}
      >
        <h2 className="text-4xl font-bold mb-4 text-[rgb(85,230,165)]">Who Am I (About) </h2>
        <p className="text-gray-300 leading-relaxed">
        Passionate about crafting seamless user experiences and translating design into functional code. <br/> 

        I am a dedicated full stack developer with a knack for creating intuitive and visually appealing web applications. With a keen eye for detail and a deep understanding of frontend and backend technologies, I strive to deliver high-quality solutions that exceed user expectations.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row md:space-x-12 px-6">
        {/* Education Timeline */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h3 className="text-3xl font-semibold text-[rgb(85,230,165)] mb-6">Education</h3>
          <div className="relative border-l-2 border-green-400 pl-6">
            {education.map((ed, i) => (
              <motion.div
                key={i}
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={timelineVariant}
                custom={i + 1}
              >
                <span className="text-green-400 font-semibold">{ed.year}</span>
                <h4 className="text-xl font-bold text-white">{ed.title}</h4>
                <p className="text-gray-300">{ed.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold text-[rgb(85,230,165)] mb-6">Experience</h3>
          <div className="relative border-l-2 text-[rgb(85,230,165)] pl-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={timelineVariant}
                custom={i + 1}
              >
                <span className="text-[rgb(85,230,165)] font-semibold">{exp.year}</span>
                <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400 italic mt-1">{exp.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="w-full max-w-4xl mt-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={timelineVariant}
        custom={0}
      >
        <h3 className="text-3xl font-semibold text-[rgb(85,230,165)] mb-8 text-center">Skills</h3>
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-300 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-4 bg-[rgb(85,230,165)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
      </motion.div>
    </section>
  );
}