"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "../context/themeContext";
import { MdOutlinePhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <footer
      className={`py-3 ${
        theme === "light" ? "bg-slate-800 shadow-md py-2" : "bg-white"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-y-5">
            <Link href="">
              <Image src="" alt="" />
            </Link>
            <p className="tracking-widest dark:text-slate-900 text-white font-semibold">
              I Love to help business most like yours succeed online. From
              website design and development.
            </p>
            <h6 className="text-3xl dark:text-slate-900 text-white font-semibold">
              <Link href="mailto:gm1sadiq@gmail.com leading-6">
                gm1sadiq@gmail.com
              </Link>
            </h6>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="grid grid-cols-3 items-center justify-center gap-4 uppercase text-white dark:text-slate-900">
              <Link
                href="https://www.facebook.com"
                className="border border-solid dark:border-slate-900 border-slate-200 p-4 text-center font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com"
                className="border border-solid dark:border-slate-900 border-slate-200 p-4 text-center font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="border border-solid dark:border-slate-900 border-slate-200 p-4 text-center font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                linkedIn
              </Link>
              <Link
                href="https://www.whatsapp.com"
                className="border border-solid dark:border-slate-900 border-slate-200 p-4 text-center font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                whatsapp
              </Link>
              <Link
                href="https://x.com"
                className="border border-solid dark:border-slate-900 border-slate-200 p-4 text-center font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              >
                X
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 items-center">
              <p className="flex items-center gap-2 text-md landing-6 dark:text-slate-900 text-white font-semibold">
                <FaLocationDot size="50px" />
                <span>pabna,Dhaka,Bangladesh</span>
              </p>
              <p className="flex items-center gap-2 text-md landing-6 dark:text-slate-900 text-white font-semibold">
                <MdOutlinePhone size="30px" />
                <span>+8801515649932</span>
              </p>
              <p className="flex items-center gap-2 text-md landing-6 dark:text-slate-900 text-white font-semibold">
                <SlEnvolope size="50px" />
                <span>
                  <Link href="mailto:gm1sadiq@gmail.com"></Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <nav className="flex items-center justify-center gap-4">
          <div className="lg:flex lg:gap-x-12 items-center md:mb-4">
            <Link href="/about"
                  className={`link ${
                    pathname === "/about"
                      ? "text-sm font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                      : theme === "light"
                      ? "text-sm font-semibold leading-6 text-white hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                      : 'text-slate-900 text-sm font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text'
                  }`}
                  >
                  About
            
              </Link>
            <Link
              href="work"
              className={`link ${
                pathname === "/work"
                ? "text-sm font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                : theme === "light"
                ? "text-sm font-semibold leading-6 text-white hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                : 'text-slate-900 text-sm font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text'
              }`}
            >
              Work
            </Link>
            <Link
              href="contact"
              className={`link ${
                pathname === "/contact"
                ? "text-sm font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                : theme === "light"
                ? "text-sm font-semibold leading-6 text-white hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                : 'text-slate-900 text-sm font-semibold leading-6 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text'
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
        </div>
        <div className="">
          <hr className="dark:bg-slate-900 bg-slate-100 mt-7"/>
        <p className="text-center dark:text-slate-900 text-white font-semibold leading-6 mt-6">Copyright @2020, All Right reserved by gmsadiq</p>
      </div>
    </footer>
  );
};

export default Footer;
