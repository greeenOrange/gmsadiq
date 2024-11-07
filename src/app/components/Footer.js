"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/themeContext";
import { MdOutlinePhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import AnimatedScrambleText from "./Animation/AnimatedText";

const Footer = () => {
  const { theme } = useTheme("light");
  const pathname = usePathname();

  return (
    <footer
      className={`lg:py-3 py-6 ${
        theme === "light" ? "bg-slate-800 shadow-md py-2" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-3">
        <div className="md:flex items-center justify-between gap-4">
          <div className="flex flex-col lg:gap-y-5 gap-y-3">
            <Link href="">
              <span className="">
                {theme === "light" ? (
                  <Image
                    src="https://i.ibb.co/HKZJjyS/gmsadiqlogodark.webp"
                    alt="gmsadiq logo"
                    width={120}
                    height={120}
                  />
                ) : (
                  <Image
                    src="https://i.ibb.co/BcX6tQx/gmsadiqlogo.webp"
                    alt="gmsadiq logo"
                    width={120}
                    height={120}
                  />
                )}
              </span>
            </Link>
            <p className="tracking-widest dark:text-slate-900 text-white font-semibold">
              I Love to help business most like yours succeed online. From
              website design and development.
            </p>
            <h6 className="lg:text-3xl text-2xl lg:block hidden dark:text-slate-900 text-white font-semibold">
              <Link href="mailto:gm1sadiq@gmail.com leading-6">
                gm1sadiq@gmail.com
              </Link>
            </h6>
          </div>
          <div className="flex flex-col gap-y-5 items-center justify-center lg:mt-0 mt-5">
            <div className="grid lg:grid-cols-3 grid-cols-4 lg:gap-4 gap-2 uppercase text-white dark:text-slate-900">
              <Link
                href="https://www.facebook.com"
                className="border border-solid dark:border-slate-900 border-slate-200 lg:p-4 px-2 lg:text-base text-xs text-center font-semibold lg:leading-6 leading-10 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com"
                className="border border-solid dark:border-slate-900 border-slate-200 lg:p-4 ps-px lg:text-base text-xs text-center font-semibold lg:leading-6 leading-10 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="border border-solid dark:border-slate-900 border-slate-200 lg:p-4 px-2 lg:text-base text-xs text-center font-semibold lg:leading-6 leading-10 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                linkedIn
              </Link>
              <Link
                href="https://www.whatsapp.com"
                className="border border-solid dark:border-slate-900 border-slate-200 lg:p-4 px-2 lg:text-base text-xs text-center font-semibold lg:leading-6 leading-10 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                whatsapp
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 lg:gap-y-3">
              <p className="flex items-center gap-2 text-md landing-6 dark:text-slate-900 text-white font-semibold">
                <FaLocationDot size="40px" />
                <span>Pabna,Dhaka,Bangladesh</span>
              </p>
              <p className="flex items-center gap-2 text-md landing-6 dark:text-slate-900 text-white font-semibold">
                <MdOutlinePhone size="30px" />
                <span>+8801515649932</span>
              </p>
              <p className="flex items-center gap-2 text-md landing-6 dark:text-slate-900 text-white font-semibold">
                <SlEnvolope size="28px" />
                <span>
                  <Link href="mailto:gm1sadiq@gmail.com">
                    gm1sadiq@gmail.com
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <nav className="flex items-center justify-center gap-4 lg:mt-4 mt-6">
          <div className="flex lg:gap-x-12 gap-x-6 items-center lg:mb-4 mb-6">
            <Link
              href="/about"
              className={`jusitfy-center ${
                pathname === "/about"
                  ? "lg:text-sm text-lg font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                  : theme === "light"
                  ? "lg:text-sm text-lg font-semibold leading-6 text-white hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                  : "text-slate-900 lg:text-sm text-lg font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              }`}
            >
              About
            </Link>
            <Link
              href="work"
              className={`jusitfy-center ${
                pathname === "/work"
                  ? "lg:text-sm text-lg font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                  : theme === "light"
                  ? "lg:text-sm text-lg font-semibold leading-6 text-white hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                  : "text-slate-900 lg:text-sm text-lg font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              }`}
            >
              Work
            </Link>
            <Link
              href="contact"
              className={`jusitfy-center ${
                pathname === "/contact"
                  ? "lg:text-sm text-lg font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                  : theme === "light"
                  ? "lg:text-sm text-lg font-semibold leading-6 text-white hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                  : "text-slate-900 lg:text-sm text-lg font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
      <p className="text-center dark:text-slate-900 text-white font-semibold leading-6 mt-6 uppercase">
        <AnimatedScrambleText text="Copyright @2020, gmsadiq All Right reserved" />
      </p>
    </footer>
  );
};

export default Footer;
