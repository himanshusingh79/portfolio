import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUser, FaBriefcase, FaRocket, FaCode, FaHeadset, FaLaptopCode } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
const Hero = () => {
return (
<div className="max-w-6xl mx-auto px-4 py-12">
{/* Hero Section */}
<section className="text-center mb-16">
<motion.h1
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-4xl md:text-6xl font-bold mb-4"
>
Development Solutions That Fit Your Needs
</motion.h1>
</section>
 {/* Client Types */}
  <section className="grid md:grid-cols-3 gap-8 mb-16">
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black p-6 rounded-xl shadow-md"
    >
      <FaGraduationCap className="text-5xl text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">College Students</h3>
      <p>Stand out with professional academic projects and boost your portfolio</p>
    </motion.div>
    
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black p-6 rounded-xl shadow-md"
    >
      <FaUser className="text-5xl text-purple-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Individuals</h3>
      <p>Bring your personal ideas to life with custom development solutions</p>
    </motion.div>
    
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black p-6 rounded-xl shadow-md"
    >
      <FaBriefcase className="text-5xl text-green-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Professionals</h3>
      <p>Enterprise-grade applications to streamline your business operations</p>
    </motion.div>
  </section>

  {/* Key Benefits */}
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-yellow-100 p-4 rounded-full mb-4">
          <BsCurrencyDollar className="text-4xl text-yellow-600" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Budget Friendly</h3>
        <p className="text-gray-600">Competitive rates for students and startups</p>
      </div>
      
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <FaRocket className="text-4xl text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Fast Delivery</h3>
        <p className="text-gray-600">Quick turnaround without compromising quality</p>
      </div>
      
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-green-100 p-4 rounded-full mb-4">
          <FaCode className="text-4xl text-green-600" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Quality Code</h3>
        <p className="text-gray-600">Clean, maintainable, and well-documented</p>
      </div>
      
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-purple-100 p-4 rounded-full mb-4">
          <FaHeadset className="text-4xl text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Ongoing Support</h3>
        <p className="text-gray-600">Free demo sessions and after-project support</p>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  {/* <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    <p className="mb-6 max-w-2xl mx-auto">From concept to completion, we'll help you build exactly what you need – on time and within budget.</p>
    <div className="flex justify-center gap-4 flex-wrap">
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
        Request Quote
      </button>
      <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
        View Portfolio
      </button>
    </div>
  </section> */}
</div>
);
};
export default Hero;