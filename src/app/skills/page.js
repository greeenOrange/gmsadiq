"use client"
import React, { useEffect } from 'react'
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 0.1,
                },
            });
        }
    }, [controls, inView]);

    const skills = [
        { id: 1, title: 'JavaScript', description: 'Library base core knowlage', icons: <SiJavascript size={40} />, level: 68 },
        { id: 2, title: 'React', description: 'React & Next Js For Frontend', icons: <FaReact size={40} />, level: 76 },
        { id: 3, title: 'Wordpress', description: 'Amazing Ecommarce & others', icons: <FaWordpressSimple size={40} />, level: 95 },
        { id: 4, title: 'Elementor', description: 'Elementor lover for wp page building', icons: <SiElementor size={40} />, level: 90 },
        { id: 5, title: 'PHP', description: 'Wordpress Theme Developement', icons: <FaPhp size={40} />, level: 60 },
        { id: 6, title: 'HTML/CSS', description: 'Markup and Style using Framework', icons: <FaHtml5 size={40} />, level: 92 },
    ];

    return (
        <section className="py-8">
            <div className="container mx-auto">
                <h6 className="text-center text-sm">SKILLS</h6>
                <h2 className="pt-4 pb-14 text-center uppercase font-semibold text-4xl">MY <span className="text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text leading-snug">ADVANTAGE</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {skills.map((skill) => (
                        <div key={skill.id} >
                            <motion.div
                                className="bg-black text-white rounded-full shadow-md min-h-96 h-full flex flex-col items-center justify-center gap-4 p-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={controls}
                                ref={ref}
                            >
                                {skill.icons}
                                <h3 className="text-3xl bg-black text-white text-center mb-2 font-bold">{skill.level}%</h3>
                                <h4 className="text-xl text-white font-semibold uppercase">{skill.title}</h4>
                                <p className="text-white text-center text-slate-300 text-sm">{skill.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills