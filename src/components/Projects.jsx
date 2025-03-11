import React, { useState } from 'react';
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="pt-10">
      <div className="border-b border-neutral-900 pb-12 px-6">
        <motion.h2 
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 0.5}}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="w-full md:w-96 h-96 cursor-pointer perspective"
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: 50}}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card (Image) */}
        <div className="absolute w-full h-full backface-hidden bg-neutral-800 rounded-lg flex items-center justify-center p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <img 
              src={project.image} 
              width={150}
              height={150}
              alt={project.title} 
              className="rounded object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-center">{project.title}</h3>
          </div>
        </div>
        
        {/* Back of card (Details) */}
        <div className="absolute w-full h-full backface-hidden bg-neutral-800 rounded-lg p-6 shadow-lg transform rotate-y-180 overflow-auto">
          <h3 className="mb-4 text-xl font-semibold">{project.title}</h3>
          <p className="mb-6 text-neutral-400">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;