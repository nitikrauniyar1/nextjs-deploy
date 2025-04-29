"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Mypic from "../../public/mypic.png";
import frame from "../../public/frame.png";
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
    const driveUrl = "https://drive.google.com/file/d/your_actual_file_id/view"; // Replace with actual file ID
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
      className="Home flex flex-col md:flex-row items-center justify-center pt-2 bg-cover bg-center"
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
          I'm a dedicated and passionate full stack web developer focused on
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

      <div
        className="order-1 md:order-2 hm-img relative w-[280px] h-[320px] md:w-[360px] md:h-[400px] mt-8 md:mt-0 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${frame.src})`,
        }}
      >
        <Image
          src={Mypic}
          alt="My Picture"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;
