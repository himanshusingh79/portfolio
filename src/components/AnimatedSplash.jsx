import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypeIt from "typeit-react";

const AnimatedSplash = ({ onComplete }) => {
  const [welcomeText, setWelcomeText] = useState('');
  const [subText, setSubText] = useState('');
  const welcomeMessage = 'Welcome';
  const subMessage = "Let's build something amazing together";

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Function to simulate typing effect
    const typeText = (text, setText) => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust typing speed by changing the interval time
    };

    // Start typing effect for welcome message
    typeText(welcomeMessage, setWelcomeText);

    // Set timer for transition
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
      onComplete();
    }, 250);

    // Start typing effect for sub message after welcome message is complete
    setTimeout(() => {
      typeText(subMessage, setSubText);
    }, 200); // Adjust timing to match the duration of the welcome message typing effect

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled
    };
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
          className="text-5xl md:text-7xl font-bold mb-4 items-center justify-center"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {welcomeText}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {subText}
        </motion.p>
      </motion.div>
    
    </motion.div>
  );
};

export default AnimatedSplash;