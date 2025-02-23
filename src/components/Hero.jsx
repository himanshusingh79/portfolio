import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, User, Briefcase, Rocket, Code, Headphones, DollarSign } from 'lucide-react';

// Greeting component that shows initially
const Greeting = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500); // Transition after 2.5 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Welcome
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Let's build something amazing together
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// ColorChangingHeader component
const ColorChangingHeader = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["text-blue-600", "text-purple-600", "text-teal-600", "text-rose-600", "text-amber-600"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-4xl md:text-6xl font-bold mb-4 transition-colors duration-1000 ${colors[colorIndex]}`}
    >
      Development Solutions That Fit Your Needs
    </motion.h1>
  );
};

// InquiryModal component
const InquiryModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    budget: 'Under $1,000'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-90vh overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Project Inquiry</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="johndoe@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe your project requirements, timeline, and any specific features you need."
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-medium transition hover:opacity-90"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

// Main Hero component
const Hero = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleInquirySubmit = async (formData) => {
    try {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      {showGreeting ? (
        <Greeting key="greeting" onComplete={() => setShowGreeting(false)} />
      ) : (
        <motion.div
          key="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <section id="home">
            <div className="w-full">
              <div className="h-20"></div>
              <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <section className="text-center mb-16">
                  <ColorChangingHeader />
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                  >
                    We bring your ideas to life with custom-built applications that perfectly match your requirements
                  </motion.p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition duration-300"
                  >
                    Start Your Project
                  </motion.button>
                </section>
                
                <motion.section 
                  className="grid md:grid-cols-3 gap-8 mb-16"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  {[
                    { Icon: GraduationCap, title: "College Students", text: "Stand out with professional academic projects and boost your portfolio", color: "blue" },
                    { Icon: User, title: "Individuals", text: "Bring your personal ideas to life with custom development solutions", color: "purple" },
                    { Icon: Briefcase, title: "Professionals", text: "Enterprise-grade applications to streamline your business operations", color: "green" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-black p-6 rounded-xl shadow-md"
                    >
                      <item.Icon className={`w-12 h-12 text-${item.color}-500 mb-4`} />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p>{item.text}</p>
                    </motion.div>
                  ))}
                </motion.section>

                <motion.section 
                  className="mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="bg-yellow-100 p-4 rounded-full mb-4">
                        <DollarSign className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Budget Friendly</h3>
                      <p className="text-gray-600">Competitive rates for students and startups</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Rocket className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Fast Delivery</h3>
                      <p className="text-gray-600">Quick turnaround without compromising quality</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="bg-green-100 p-4 rounded-full mb-4">
                        <Code className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Quality Code</h3>
                      <p className="text-gray-600">Clean, maintainable, and well-documented</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="bg-purple-100 p-4 rounded-full mb-4">
                        <Headphones className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Ongoing Support</h3>
                      <p className="text-gray-600">Free demo sessions and after-project support</p>
                    </div>
                  </div>
                </motion.section>
                
                <InquiryModal 
                  isOpen={isModalOpen} 
                  onClose={() => {
                    setIsModalOpen(false);
                    setSubmitStatus(null);
                  }}
                  onSubmit={handleInquirySubmit}
                />
                
                {submitStatus && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg ${
                      submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
                    } text-white font-medium`}
                  >
                    {submitStatus === 'success' ? 
                      'Thanks! Your inquiry has been submitted.' : 
                      'Error submitting form. Please try again.'}
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;