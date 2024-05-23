"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import ThemeToggle from './ThemeToggle';
import { motion } from "framer-motion";
import { useTheme } from '../context/themeContext';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme } = useTheme();

    const variants = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }}
        const Path = (
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 18%)"
              strokeLinecap="round"
              
            />
          );

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header className={`sticky top-0 top-0 w-full z-50 ${(scrollY || mobileMenuOpen) && (theme === 'light') ? 'bg-white shadow-md py-2' : 'dark:bg-slate-800'}`}>
            <motion.nav 
            className={`mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6}`} 
            aria-label="Global"
            variants={variants}
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className=""><Image src="https://i.ibb.co/9pX6YTC/favicon.webp"
                        alt='gmsadiq logo'
                            width={100}
                            height={100} 
                            /></span>
                    </a>
                </div>
                <div className="flex lg:hidden ">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open main menu'}</span>
                        {mobileMenuOpen ? <AiOutlineClose size="30" aria-hidden="true" /> : <CiMenuBurger size="30" aria-hidden="true" />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 items-center">
                    <div className="relative">
                        <a href='about' className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text">
                            About
                        </a>
                    </div>

                    <a href="work" className="text-sm font-semibold leading-6  hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text">
                        Work
                    </a>
                    <a href="contact" className="text-sm font-semibold leading-6  hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text">
                        Contact
                    </a>

                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded me-10">
                        Download Resume
                    </button>
                    <ThemeToggle />
                </div>
            </motion.nav>

            {mobileMenuOpen && (
                <div className="lg:hidden items-center">
                    <div className="fixed inset-0 z-10" />
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="">gmsadiq</span>
                            </a>
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

                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                                    >
                                        Work
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                                    >
                                        Contact
                                    </a>
                                </div>
                                <div className="py-6">
                                    <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded me-10">
                                        Download Resume
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </header>

    )
}

export default Header