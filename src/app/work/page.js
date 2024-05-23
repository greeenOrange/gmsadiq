"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/project";
import "./style.css";

const Works = () => {


  const [activeTab, setActiveTab] = useState("All");

  const getFilteredProjects = () => {
    if (activeTab === "All") {
      return projects;
    }

    if (activeTab === "Other") {
      return projects.filter(
        (project) =>
          !["reactjs", "php", "wordpress"].some((tech) =>
            project.technology
              .map((t) => t.toLowerCase())
              .includes(tech.toLowerCase())
          )
      );
    }

    return projects.filter((project) =>
      project.technology
        .map((t) => t.toLowerCase())
        .includes(activeTab.toLowerCase())
    );
  };

  const filteredProjects = getFilteredProjects();

  const tabs = ["All", "ReactJS", "PHP", "WordPress", "Other"];

  return (
    <section id="work" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto py-8">
          <div>
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4 justify-center flex-wrap gap-y-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-md focus:outline-none ${
                      activeTab === tab
                        ? "font-semibold leading-6 text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text"
                        : "font-semibold leading-6 dark:text-gray-100 hover:text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text transition-all duration-200"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                    {tab === activeTab ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
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
                        href={project?.livelink}
                      >
                        Live
                      </a>
                      <hr className="w-80 border-t-2 border-white my-2" />
                      <div className="flex">
                        <a
                          className="text_group me-1 hover:text-white cursor-pointer"
                          href={project?.frontend}
                        >
                          frontend{" "}
                        </a>
                        <p className="border-r-2 border-white"></p>
                        <a
                          className="text_group ms-1 hover:text-white cursor-pointer"
                          href={project?.backend}
                        >
                          backend
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
