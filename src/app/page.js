import Image from "next/image";
import Banner from "./components/Banner";
import About from "./about/page";
import Skills from "./skills/page";
import Works from "./work/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
