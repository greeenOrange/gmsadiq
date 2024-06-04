"use client"
import { GoogleAnalytics } from '@next/third-parties/google'
import Banner from "./components/Banner";
import About from "./about/page";
import Skills from "./skills/page";
import Works from "./work/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <GoogleAnalytics gaId="G-X2W9TLCW50" />
      <Banner />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
