"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Works = () => {
    const tabs = [
        { id: 'tab1', label: 'All', technology: "HTML,CSS,ReactJs,NextJs,Wodpress,Elementor,PHP, TwilwindCSS,Boostrap", name: 'define1', img:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg", 
        content: [
            { src: 'https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg', alt: 'Image 1', overlayText: 'Image 1' },
            { src: '/images/image2.jpg', alt: 'Image 2', overlayText: 'Image 2' },
            { src: '/images/image3.jpg', alt: 'Image 3', overlayText: 'Image 3' },
            { src: '/images/image4.jpg', alt: 'Image 4', overlayText: 'Image 4' }
          ]
     },
        { id: 'tab2', label: 'HTML/CSS', technology: "HTML,CSS, TwilwindCSS,Boostrap,", name: 'define2', img:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-4.jp",
        content: [
            { src: 'https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-4.jp', alt: 'Image 1', overlayText: 'Image 1' },
            { src: '/images/image2.jpg', alt: 'Image 2', overlayText: 'Image 2' },
            { src: '/images/image3.jpg', alt: 'Image 3', overlayText: 'Image 3' },
            { src: '/images/image4.jpg', alt: 'Image 4', overlayText: 'Image 4' }
          ]
         },
        { id: 'tab3', label: 'ReactJs', technology: "ReactJs,Boostrap,", name: 'define3', img:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg",
        content: [
            { src: 'https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg', alt: 'Image 1', overlayText: 'Image 1' },
            { src: '/images/image2.jpg', alt: 'Image 2', overlayText: 'Image 2' },
            { src: '/images/image3.jpg', alt: 'Image 3', overlayText: 'Image 3' },
            { src: '/images/image4.jpg', alt: 'Image 4', overlayText: 'Image 4' }
          ] },
        { id: 'tab4', label: 'NextJS', technology: "NextJs,TwilwindCSS", name: 'define4', img:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-4.jp",
        content: [
            { src: 'https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-4.jp', alt: 'Image 1', overlayText: 'Image 1' },
            { src: '/images/image2.jpg', alt: 'Image 2', overlayText: 'Image 2' },
            { src: '/images/image3.jpg', alt: 'Image 3', overlayText: 'Image 3' },
            { src: '/images/image4.jpg', alt: 'Image 4', overlayText: 'Image 4' }
          ] },
        { id: 'tab5', label: 'Wordpress', technology: "Wodpress,Elementor", name: 'define5', img:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg",
        content: [
            { src: 'https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-7.jpg', alt: 'Image 1', overlayText: 'Image 1' },
            { src: '/images/image2.jpg', alt: 'Image 2', overlayText: 'Image 2' },
            { src: '/images/image3.jpg', alt: 'Image 3', overlayText: 'Image 3' },
            { src: '/images/image4.jpg', alt: 'Image 4', overlayText: 'Image 4' }
          ] },
        { id: 'tab6', label: 'PHP', technology: "PHP,TwilwindCSS", name: 'define6', img:"https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-4.jp",
        content: [
            { src: 'https://orbius.premiumthemes.in/wp-content/uploads/2024/03/pf-horizontal-slider-4.jp', alt: 'Image 1', overlayText: 'Image 1' },
            { src: '/images/image2.jpg', alt: 'Image 2', overlayText: 'Image 2' },
            { src: '/images/image3.jpg', alt: 'Image 3', overlayText: 'Image 3' },
            { src: '/images/image4.jpg', alt: 'Image 4', overlayText: 'Image 4' }
          ] }
      ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };

  return (
    <section className="py-16">
         <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Professional Tab Menu</h1>
        <div>
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
           {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-md focus:outline-none ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
      {tabs
          .filter((tab) => activeTab === 'all' || tab.id === activeTab)
          .map((tab, index) =>
            // tab.map((pd, index) => (
              <div key={index} className="relative">
                <p>{tab.technology}</p>
                <img src={tab.img} className="w-full h-auto rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-md">
                  <p className="text-white text-lg font-bold">{tab.name}</p>
                </div>
              </div>
            // ))
          )}
      </div>
    </div>
      </div>
    </motion.div>
    </section>
  )
}

export default Works