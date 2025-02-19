import React from 'react'
import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  // Social media links
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himanshu-singh-526895214/",
      icon: <FaLinkedin className="h-6 w-6" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yourprofile",
      icon: <FaInstagram className="h-6 w-6" />
    },
    {
      name: "GitHub",
      url: "https://github.com/himanshusingh79",
      icon: <FaGithub className="h-6 w-6" />
    }
  ];

  return (
    <section id="contact">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 0.5}}
          className="my-10 text-center text-4xl"
        >
          Get In Touch
        </motion.h2>
        
        <div className="text-center tracking-tighter">
          <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          
          <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          
          <a 
            href={`mailto:${CONTACT.email}`} 
            className="border-b hover:text-lime-500 transition-colors"
          >
            {CONTACT.email}
          </a>
        </div>

        {/* Social Media Links */}
        <motion.div 
          className="mt-10 flex justify-center gap-8"
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: 50}}
          transition={{ duration: 0.7}}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {social.icon}
              <span className="text-sm">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact