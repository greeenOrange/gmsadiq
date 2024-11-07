"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const characters = "acdefhisjklmuvyz-.,*!?@&%/="; // Characters for scramble effect
const scrambleSpeed = 50; // milliseconds between character changes
const holdDuration = 2000;
export default function AnimatedScrambleText({ text }) {
    const [displayText, setDisplayText] = useState("");
    const [isFinalText, setIsFinalText] = useState(false);

    useEffect(() => {
        let timeout;
        const scrambleText = (iteration = 0) => {
            if (iteration < text.length) {
                // Display random characters up to the current letter position
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((char, i) =>
                            i < iteration ? char : characters[Math.floor(Math.random() * characters.length)]
                        )
                        .join("")
                );
                timeout = setTimeout(() => scrambleText(iteration + 1), scrambleSpeed);
            } else {
                // Show final text and hold for a while
                setDisplayText(text);
                setIsFinalText(true);
                timeout = setTimeout(() => {
                    setIsFinalText(false);
                    scrambleText(0);
                }, holdDuration);
            }
        };

        scrambleText();
        return () => clearTimeout(timeout);
    }, [text]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isFinalText ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-center dark:text-slate-900 text-white font-semibold leading-6 mt-6"
        >
            {displayText}
        </motion.span>
    );
}