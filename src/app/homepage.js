"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Mypic from "../../public/mypic.png";
import PlayIcon from "../../public/play.svg";
import Background from "../../public/background.jpg";

const titles = [
  "Web Developer",
  "Engineer",
  "Programmer",
  "Software Engineer",
  "Graphics Designer",
  "App Developer"
];

const HomePage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];

    if (!deleting && subIndex === currentTitle.length) {
      setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setText(currentTitle.substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  const handleClick = () => {
    const driveUrl =
      "https://drive.google.com/file/d/1X5C2NG1nmzqVS72Ql_95kGfwZx1cOn4p/view"; // Replace with actual file ID
    const win = window.open(driveUrl, "_blank");
    if (win) {
      win.focus();
    } else {
      alert("Unable to open the link. Please check your browser settings.");
    }
  };

  return (
    <div
      id="home"
      className="Home flex flex-col md:flex-row items-center justify-center pt-2 px-6 lg:px-16 md:gap-6 lg:gap-10 bg-cover bg-center"
      style={{
        minHeight: "calc(100vh - 64px)",
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <div className="order-2 md:order-1 hm-contents w-full md:w-1/2 p-4 md:p-0 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="block text-white">HI, I'M NITIK!</span>
          <span className="block text-green-400">{text}</span>
        </h1>
        <p
          className="mb-6 mt-9 text-base md:text-base font-semibold"
          style={{ color: "rgb(178 178 178)" }}
        >
          I'm a dedicated and good full stack web developer focused on
          <br className="hidden md:inline" />
          building websites that are both beautiful and functional with the use
          <br className="hidden md:inline" /> of AI. I love finding solutions to
          challenges and creating online
          <br className="hidden md:inline" />
          experiences that are easy to use and enjoyable.
        </p>

        <div className="flex flex-col md:flex-row items-center mt-12 justify-center md:justify-start">
          <button
            onClick={handleClick}
            className="px-8 py-4 mb-4 md:mb-0 md:mr-2 flex items-center justify-center font-semibold cursor-pointer group bg-[rgb(85,230,165)] hover:bg-[rgb(17,31,37)] transition duration-300 hover:text-amber-50"
          >
            Download CV
            <svg
              className="w-5 ml-2 group-hover:fill-amber-50 transition duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </button>

          <button className="px-8 py-4 flex items-center cursor-pointer font-semibold text-white ml-0 md:ml-2 hover:text-green-400">
            <Image
              src={PlayIcon}
              alt="Play Icon"
              className="w-8 md:w-14 mr-2"
            />
            <a href="/#contacts">Get Started</a>
          </button>
        </div>
      </div>

      {/* Hexagonal Profile Frame Container */}
      <div className="order-1 md:order-2 relative w-[320px] h-[368px] md:w-[380px] md:h-[437px] lg:w-[420px] lg:h-[483px] mt-[20px] flex items-center justify-center drop-shadow-2xl">
        
        {/* SVG Definition for Rounded Hexagon Clip Path */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="hex-profile-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.5 0.05 C 0.53 0.05 0.57 0.07 0.6 0.09 L 0.88 0.23 C 0.94 0.26 0.95 0.30 0.95 0.34 L 0.95 0.66 C 0.95 0.70 0.94 0.74 0.88 0.77 L 0.6 0.91 C 0.57 0.93 0.53 0.95 0.5 0.95 C 0.47 0.95 0.43 0.93 0.4 0.91 L 0.12 0.77 C 0.06 0.74 0.05 0.70 0.05 0.66 L 0.05 0.34 C 0.05 0.30 0.06 0.26 0.12 0.23 L 0.4 0.09 C 0.43 0.07 0.47 0.05 0.5 0.05 Z" />
            </clipPath>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* 1. Clipped Image Container */}
        <div
          className="absolute inset-[3%] z-0 bg-[#12161b] overflow-hidden flex items-center justify-center"
          style={{ clipPath: "url(#hex-profile-clip)" }}
        >
          {/* Subtle Ambient Background Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(85,230,165,0.18)_0%,_transparent_65%)] pointer-events-none" />

          {/* Scaled down slightly & shifted down for perfect alignment */}
          <div className="relative w-full h-full transform scale-95 translate-y-5">
            <Image
              src={Mypic}
              alt="My Picture"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Balanced Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#12161b] via-[#12161b]/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* 2. Precision Cyber Frame Overlay */}
        <svg
          viewBox="0 0 400 460"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        >
          {/* Inner Dark Beveled Border */}
          <path
            d="M 25 195 L 25 140 Q 25 118 60 100 L 180 35 Q 200 25 220 35 L 340 100 Q 375 118 375 140 L 375 195 L 375 265 L 375 320 Q 375 342 340 360 L 220 425 Q 200 435 180 425 L 60 360 Q 25 342 25 320 L 25 265 Z"
            fill="none"
            stroke="#12161b"
            strokeWidth="12"
          />

          {/* Top Mint-Green Bracket */}
          <path
            d="M 25 195 L 25 140 Q 25 118 60 100 L 180 35 Q 200 25 220 35 L 340 100 Q 375 118 375 140 L 375 195"
            fill="none"
            stroke="rgb(85,230,165)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#neon-glow)"
          />

          {/* Bottom Mint-Green Bracket */}
          <path
            d="M 25 265 L 25 320 Q 25 342 60 360 L 180 425 Q 200 435 220 425 L 340 360 Q 375 342 375 320 L 375 265"
            fill="none"
            stroke="rgb(85,230,165)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#neon-glow)"
          />

          {/* Left Side Vertical Bar */}
          <rect
            x="19"
            y="207"
            width="12"
            height="46"
            rx="4"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="2"
          />

          {/* Right Side Vertical Bar */}
          <rect
            x="369"
            y="207"
            width="12"
            height="46"
            rx="4"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="2"
          />
        </svg>

      </div>
    </div>
  );
};

export default HomePage;