"use client"
import React, { useEffect } from 'react'
import {skills} from "../data/project";
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

    return (
        <section id='skills' className="py-8">
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