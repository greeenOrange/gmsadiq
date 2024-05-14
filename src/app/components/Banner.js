"use client"
import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from "react";

function Banner() {
    const textIndex = useMotionValue(0);
    const texts = [
        "Web Developer.",
        "Web Programmer",
        "Frontend Developer"

    ];
    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts?.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        });
    }, [textIndex, texts, count, updatedThisRound, texts?.length]);

    return (
        <div className="h-64 md:h-96 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://greeenorange.github.io/Portfolio-website/images/hero-bg.svg')" }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                <p className="text-lg md:text-xl text-dark dark:text-white mt-4 text-gray-900 font-bold">{"I'm gm sadiq"}</p>
                    <h1 className="font-bold text-gray-900 dark:text-white md:text-5xl Class
Properties"> <span className="block">a </span><motion.span className='inline uppercase text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text'>
                            {displayText}</motion.span>
                        <span aria-hidden="true">|</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner