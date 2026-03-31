import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="bg-midnight-50 dark:bg-midnight-900/40 relative overflow-hidden tibeb-pattern border-t border-gold/10">
      <div className="geez-watermark top-10 left-10 text-gold opacity-5">ጥበብ</div>
      <div className="section-container">
        <div className="space-y-4 mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-[0.2em] uppercase text-xs flex justify-center items-center"
            >
              <span className="w-8 h-[1px] bg-gold mr-3"></span>
              Portfolio
              <span className="w-8 h-[1px] bg-gold ml-3"></span>
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight"
            >
              Selected Projects
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1.5 w-24 bg-accent mx-auto rounded-full mt-6"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
            />
          ))}
        </div>

        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </section>
  );
};

export default Projects;
