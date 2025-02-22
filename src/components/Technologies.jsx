import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiBlockchaindotcom } from 'react-icons/si';
import { AiOutlineCode } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
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
        <section id="technologies" className="pt-24"> 
            <div className="border-b border-neutral-800 pb-24">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl"
                >
                    Technologies We Offer
                </motion.h2>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-8"
                >
                    {/* Technology Cards */}
                    {[{
                        id: 1,
                        icon: <RiReactjsLine className="text-7xl text-cyan-400" />, 
                        name: "React", 
                        color: "text-cyan-400",
                        duration: 2.5
                    }, {
                        id: 2,
                        icon: <FaNodeJs className="text-7xl text-green-500" />, 
                        name: "Node", 
                        color: "text-green-500",
                        duration: 3
                    }, {
                        id: 3,
                        icon: <FaPython className="text-7xl text-yellow-500" />, 
                        name: "Python", 
                        color: "text-yellow-500",
                        duration: 3.5
                    }, {
                        id: 4,
                        icon: <SiTensorflow className="text-7xl text-orange-500" />, 
                        name: "Machine Learning", 
                        color: "text-orange-500",
                        duration: 4
                    }, {
                        id: 5,
                        icon: <BsCircleFill className="text-7xl text-purple-500" />, 
                        name: "Deep Learning", 
                        color: "text-purple-500",
                        duration: 4.5
                    }, {
                        id: 6,
                        icon: <SiBlockchaindotcom className="text-7xl text-blue-500" />, 
                        name: "Blockchain", 
                        color: "text-blue-500",
                        duration: 5
                    }, {
                        id: 7,
                        icon: <AiOutlineCode className="text-7xl text-pink-500" />, 
                        name: "Full Stack", 
                        color: "text-pink-500",
                        duration: 5.5
                    }].map(({ id, icon, name, color, duration }) => (
                        <div key={id} className="flex flex-col items-center">
                            <motion.div 
                                variants={iconVariants(duration)}
                                initial="initial"
                                animate="animate"
                                className="rounded-2xl border-4 border-neutral-800 p-4"
                            >
                                {icon}
                            </motion.div>
                            <motion.p
                                variants={iconVariants(duration)}
                                initial="initial"
                                animate="animate" 
                                className={`mt-2 font-medium ${color}`}
                            >
                                {name}
                            </motion.p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Technologies;
