import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TypeIt from 'typeit-react';

const AnimatedSplash = ({callBack }) => {

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
        <motion.div
          className="text-5xl md:text-7xl font-bold mb-4 items-center justify-center"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <TypeIt
            options={{
                cursor: true,      // Enable cursor
                cursorChar: "_",   // Change cursor character
                cursorSpeed: 500,   // Increase blinking speed
              speed: 30,
              waitUntilVisible: true,
              startDelay: 500,
              afterComplete: () => {
                document.querySelector(".ti-cursor").style.display = "none"; // Hide cursor after typing
              }
            }}
          >
            Welcome
          </TypeIt>
        </motion.div>
        <motion.div
          className="text-xl md:text-2xl items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <TypeIt
            options={{
              speed: 30,
              waitUntilVisible: true,
              cursorChar: "_",  
              startDelay: 1500,
              afterComplete: () => {
                document.querySelector(".ti-cursor").style.display = "none"; // Hide cursor after typing
                callBack(800)
              }
            }}
          >
            Let's build something amazing together
          </TypeIt>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSplash;