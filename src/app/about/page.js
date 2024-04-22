"use client"
import React from 'react'
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="w-full ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="text-gradient" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stop-color="#833ab4" />
            <stop offset="50%" stop-color="#fd1d1d" />
            <stop offset="100%" stop-color="#fcb045" />
          </linearGradient>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text x="50%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="url(#text-gradient)" font-size="24" font-family="Arial" font-weight="bold">Based in Bangladesh</text>
          </mask>
        </defs>
        <path fill="#f3f4f5" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,117.3C672,96,768,96,864,117.3C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="26">
          Web Developer & Frontend Developer
        </text>
        <text x="45%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="26">
          Based in
        </text>
        <text x="54.3%" y="70%" dominantBaseline="middle" textAnchor="middle"fill="url(#text-gradient)" font-size="26" font-family="Arial" font-weight="bold" mask="url(#text-mask)">
          Bangladesh
        </text>
        <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="20">
          I'm a React Developer.
        </text>
        <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="20">
          I build awesome and latest website having strong command on any design
        </text>
      </svg>
      <div className="min-h-svh w-full bg-white relative bg-cover bg-topp bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://greeenorange.github.io/Portfolio-website/images/alom.png')" }}>
      </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus maiores reprehenderit numquam enim nemo perspiciatis nostrum cumque aspernatur id deleniti iure, repellendus, debitis doloribus inventore. Reiciendis nemo ducimus aspernatur?</p>
    </section>
  )
}

export default About