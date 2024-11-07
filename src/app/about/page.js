"use client";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="w-full">
      <svg
        className="hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="text-gradient" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#833ab4" />
            <stop offset="50%" stopColor="#fd1d1d" />
            <stop offset="100%" stopColor="#fcb045" />
          </linearGradient>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="20%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#text-gradient)"
              fontSize="24"
              fontFamily="Arial"
              fontWeight="bold"
            >
              Based in Bangladesh
            </text>
          </mask>
        </defs>
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,117.3C672,96,768,96,864,117.3C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="black"
          fontSize="26"
        >
          Web Developer & Frontend Developer
        </text>
        <text
          x="45%"
          y="70%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="black"
          fontSize="26"
        >
          Based in
        </text>
        <text
          x="54.3%"
          y="70%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#text-gradient)"
          fontSize="26"
          fontFamily="Arial"
          fontWeight="bold"
          mask="url(#text-mask)"
        >
          Bangladesh
        </text>
        <text
          x="50%"
          y="80%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="black"
          fontSize="18"
        >
          {"I'm a React Developer"}
        </text>
        <text
          x="50%"
          y="90%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="black"
          fontSize="14"
        >
          build awesome and latest website having strong command on any design
        </text>
      </svg>
      <div
        className="relative min-h-dvh w-full bg-white bg-cover bg-top bg-fixed"
        style={{
          backgroundImage:
            "url('https://greeenorange.github.io/Portfolio-website/images/alom.png')",
        }}
      >
        {/* Overlay for mobile screens */}
        <div className="lg:hidden block lg:bg-black/40 backdrop-blur-sm absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-lg font-bold text-2xl md:text-3xl">
              specializing in creating modern, high-quality websites with a
              strong focus on design precision.Ensuring each project is
              optimized, responsive, and
            </h1>
            <p className="mt-2 font-bold text-sm text-base md:text-lg inline uppercase text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text">
              tailored to meet client needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
