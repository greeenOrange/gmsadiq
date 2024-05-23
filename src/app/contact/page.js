"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { SlEnvolope } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        alert("Email sent successfully!");
        setFormData({
          name: "",
          mail: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      setError("Failed to send email");
      alert("An error occurred. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-8">
      <div className="container mx-auto">
        <div className="flex gap-2 items-center justify-center">
          <h2 className="text-4xl font-semibold text-center">
            <span className="inline text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text leading-snug">
              Let’s Connect
            </span>
          </h2>
          <Image
            src={`https://oshinewptheme.com/v59/wp-content/uploads/sites/66/2024/01/contact.svg`}
            width={50}
            height={50}
            alt="contact us"
          />
        </div>
        <p className="text-center py-4 mb-8">Don’t need be Shy, Write to me</p>
        <div className="md:flex items-center justify-between gap-8">
          <p className="bg-[#f0ffc8] px-4 py-2 rounded-full flex items-center justify-center gap-1">
            <SlEnvolope />
            gm1sadiq@gmail.com
          </p>
          <motion.div
            className="bottom-4 right-4 text-center"
            animate={{
              y: [-10, 0, -10],
              transition: { repeat: Infinity, duration: 1 },
            }}
          >
            <GoDotFill className="bg-black rounded-full" />
          </motion.div>
          <p className="bg-[#ffaeae] px-4 py-2 rounded-full flex items-center justify-center gap-1">
            <MdOutlinePhone />
            +8801515649932
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full md:w-auto mx-auto mt-10">
          <div className="flex items-center gap-4">
            <div className="mb-4">
              <label
                for="name"
                className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block mt-1 appearance-none bg-transparent border-b-2 border-gray-300 focus:border-gray-500 font-bold  w-full text-black-700 py-3 px-2 leading-tight focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                required
                className="block mt-1 appearance-none bg-transparent border-b-2 border-gray-300 focus:border-gray-500 font-bold  w-full text-black-700 py-3 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="mb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                for="mobile"
              >
                Phone
              </label>
              <input
                type="tel"
                id="mobile"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block mt-1 appearance-none bg-transparent border-b-2 border-gray-300 focus:border-gray-500 font-bold  w-full text-black-700 py-3 px-2 leading-tight focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                for="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="block mt-1 appearance-none bg-transparent border-b-2 border-gray-300 focus:border-gray-500 font-bold  w-full text-black-700 py-3 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="block mt-1 appearance-none bg-transparent border-b-2 border-gray-300 focus:border-gray-500 font-bold  w-full text-black-700 py-3 px-2 leading-tight focus:outline-none text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="appearance-none bg-transparent bg:text-white main_btn flex items-center gap-3"
          >
            {loading ? "Sending..." : "Send Now"}
            <span><FaArrowRight /></span>          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
