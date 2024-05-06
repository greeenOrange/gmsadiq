"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';
import { SlEnvolope } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/sendEmail', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
      
    );
 
    if (response.ok) {
      setSuccess(true);
      alert('Email sent successfully!');
        setFormData({
          name: '',
          mail: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      setError('Failed to send email');
      alert('An error occurred. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex gap-2 items-center justify-center">
        <h2 className="text-4xl font-semibold text-center">
          <span className='inline text-transparent bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 bg-clip-text leading-snug'>Let’s Connect
          </span>
        </h2>
        <Image
          src={`https://oshinewptheme.com/v59/wp-content/uploads/sites/66/2024/01/contact.svg`}
          width={50}
          height={50} 
          alt='contact us'
          />
        </div>
        <p className="text-center py-4 mb-8">Don’t need be Shy, Write to me</p>
        <div className="flex items-center justify-between gap-8">
          <p className="bg-[#f0ffc8] px-4 py-2 rounded-full flex items-center justify-center gap-1">
          <SlEnvolope />
            gm1sadiq@gmail.com
            </p>
          <motion.div
            className="bottom-4 right-4"
            animate={{ y: [-10, 0, -10], transition: { repeat: Infinity, duration: 1 } }}
          >
            <GoDotFill className="bg-black rounded-full" />
          </motion.div>
          <p className="bg-[#ffaeae] px-4 py-2 rounded-full flex items-center justify-center gap-1">
          <MdOutlinePhone />
            +8801515649932
            </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <input
          type="text"
          placeholder="full name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="mail"
          placeholder="your email"
          value={formData.mail}
          onChange={handleChange}
          required
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="subject"
          placeholder="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="write message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        ></textarea>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{loading ? 'Sending...' : 'Send'}</button>
    </form>
      </div>
    </section>
  )
}

export default Contact