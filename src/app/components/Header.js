"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useTheme } from "../context/themeContext";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 top-0 w-full z-50 ${
        (scrollY || mobileMenuOpen) && theme === "light"
          ? "bg-white shadow-md py-2"
          : "dark:bg-slate-800"
      }`}
    >
      <motion.nav
        className={`mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6}`}
        aria-label="Global"
        variants={variants}
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="">
              {theme === "light" ? (
                <Image
                  src="https://i.ibb.co/BcX6tQx/gmsadiqlogo.webp"
                  alt="gmsadiq logo"
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src="https://i.ibb.co/HKZJjyS/gmsadiqlogodark.webp"
                  alt="gmsadiq logo"
                  width={100}
                  height={100}
                />
              )}
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <AiOutlineClose size="30" aria-hidden="true" />
            ) : (
              <CiMenuBurger size="30" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          <div className="relative">
            <Link
              href="about"
              className={`link ${
                pathname === "/about"
                  ? "text-sm font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                  : "text-sm font-semibold leading-6  hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
              }`}
            >
              About
            </Link>
          </div>

          <Link
            href="work"
            className={`link ${
              pathname === "/work"
                ? "text-sm font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                : "text-sm font-semibold leading-6  hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
            }`}
          >
            Work
          </Link>
          <Link
            href="contact"
            className={`link ${
              pathname === "/contact"
                ? "text-sm font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                : "text-sm font-semibold leading-6  hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="left_menu_items lg:flex lg:flex-1 lg:justify-end justify-space-between">
          <a
            href="https://drive.google.com/file/d/181ViOFwD6pFuFV_lugYHwV2e5U-05I21/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block appearance-none bg-transparent bg:text-white main_btn me-10"
          >
            Download Resume
          </a>
          <ThemeToggle />
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <div className="lg:hidden items-center">
          <div className="fixed inset-0 z-10" />
          <div
            className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
              theme === "light"
                ? "bg-white shadow-md py-2"
                : "dark:bg-slate-800"
            }`}
          >
            <div className="relative flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <AiOutlineClose size="30" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <Link
                    href="work"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                  >
                    Work
                  </Link>
                  <Link
                    href="contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="https://drive.google.com/file/d/181ViOFwD6pFuFV_lugYHwV2e5U-05I21/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-block appearance-none bg-transparent bg:text-white main_btn me-10"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
