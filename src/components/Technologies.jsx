import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiBlockchaindotcom } from 'react-icons/si';
import { AiOutlineCode } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { motion } from "motion/react";

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        }
    },
});

const Technologies = () => {
  return (
    <section id="technologies">
        <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies We Offer</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.p
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="mt-2 font-medium text-cyan-400">React</motion.p>
            </div>
            
            <div className="flex flex-col items-center">
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
                <motion.p
                variants={iconVariants(3)}
                initial="initial"
                animate="animate" 
                className="mt-2 font-medium text-green-500">Node</motion.p>
            </div>
            
            <div className="flex flex-col items-center">
                <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-500"/>
                </motion.div>
                <motion.p
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" 
                className="mt-2 font-medium text-yellow-500">Python</motion.p>
            </div>
            
            <div className="flex flex-col items-center">
                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTensorflow className="text-7xl text-orange-500"/>
                </motion.div>
                <motion.p
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" 
                className="mt-2 font-medium text-orange-500">Machine Learning</motion.p>
            </div>
            
            <div className="flex flex-col items-center">
                <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsCircleFill className="text-7xl text-purple-500"/>
                </motion.div>
                <motion.p
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate" 
                className="mt-2 font-medium text-purple-500">Deep Learning</motion.p>
            </div>
            
            <div className="flex flex-col items-center">
                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiBlockchaindotcom className="text-7xl text-blue-500"/>
                </motion.div>
                <motion.p
                variants={iconVariants(5)}
                initial="initial"
                animate="animate" 
                className="mt-2 font-medium text-blue-500">Blockchain</motion.p>
            </div>
            
            <div className="flex flex-col items-center">
                <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiOutlineCode className="text-7xl text-pink-500"/>
                </motion.div>
                <motion.p
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate" 
                className="mt-2 font-medium text-pink-500">Full Stack</motion.p>
            </div>
        </motion.div>
    </div>
    </section>
  )
}

export default Technologies