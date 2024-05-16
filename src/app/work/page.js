"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import "./style.css"

const Works = () => {
    const projects = [
        { id: 'tab1', label: 'All', technology: "HTML, CSS, reactjs, NextJs, Wodpress, Elementor, PHP, TwilwindCSS, Boostrap", name: 'define1', images:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg", 
        
     },
        { id: 'tab2', label: 'HTML/CSS', technology: "HTML, CSS, TwilwindCSS, Boostrap,", name: 'define2', images:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg",
         },
        { id: 'tab3', label: 'ReactJs', technology: "reactjs, Boostrap,", name: 'define3', images:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg",
         },
        { id: 'tab4', label: 'NextJS', technology: "NextJs, TwilwindCSS", name: 'define4', images:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg",
      },
        { id: 'tab5', label: 'Wordpress', technology: "Wordpress, Elementor", name: 'define5', images:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg",
         },
        { id: 'tab6', label: 'PHP', technology: "PHP, TwilwindCSS", name: 'define6', images:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg", }
      ];

      const [activeTab, setActiveTab] = useState('All');
  
      const handleTabClick = (technology) => {
        setActiveTab(technology);
      };
    
      const filteredProjects = activeTab === 'All' ? projects : projects.filter(project => {
        const lowerCaseActiveTab = activeTab.toLowerCase();
      
        if (lowerCaseActiveTab === 'all') {
          return true;
        } else if (lowerCaseActiveTab === 'other') {
          return !project.technology.includes(', ' + lowerCaseActiveTab) && !project.technology.includes(lowerCaseActiveTab + ', ');
        } else {
          return project.technology.toLowerCase().includes(lowerCaseActiveTab);
        }
      });
      
      
    
      const tabs = ['ReactJS', 'PHP', 'WordPress', 'Other'];

  return (
    <section id='work' className="py-16">
         <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-8">
        <div>
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4 justify-center flex-wrap gap-y-4">
        <button
              className={`px-4 py-2 rounded-md focus:outline-none ${
                activeTab === "All"
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200'
              }`}
              onClick={() => handleTabClick("All")}
            >
              All
            </button>
           {tabs.map((technology, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md focus:outline-none ${
                activeTab === technology
                  ? 'selected bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200'
              }`}
              onClick={() => handleTabClick(technology)}
            >
              {technology}
              {technology === activeTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
      <AnimatePresence mode="wait">
      {filteredProjects.map((project, index) =>
                 <motion.div 
                 key={index} 
                 className="relative main_card"
                 initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
               >
                 <motion.img 
                   src={project?.images}
                   width={500}
                   height={800}
                   className="w-full h-auto rounded-md" 
                   alt="Picture of projects"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.3 }} 
                 />
                 <motion.div 
                   className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-md"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 0 }}
                   whileHover={{ opacity: 1 }}
                   transition={{ duration: 0.3 }} 
                 >
                   <a
                   className="text_live hover:text-white cursor-pointer"
                    href={project?.livelink}>Live</a>
                   <hr className="w-80 border-t-2 border-white my-2" /> 
                   <div className="flex">
                      <a className="text_group me-1 hover:text-white cursor-pointer" href={project?.frontend}>frontend </a>
                      <p className='border-r-2 border-white'></p>
                      <a className="text_group ms-1 hover:text-white cursor-pointer" href={project?.backend}>backend</a>
                   </div>
                 </motion.div>
               </motion.div>
          )}
          </AnimatePresence>
      </div>
    </div>
      </div>
    </motion.div>
    </section>
  )
}

export default Works