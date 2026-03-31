import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Globe } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-midnight-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-gold/20"
        >
          {/* Top Tibeb Border */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#009b4d] via-[#ffcd00] to-[#ef3340] z-20"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="overflow-y-auto">
            {/* Project Image Header */}
            <div className="relative h-64 sm:h-80 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                        key={t} 
                        className="px-3 py-1 bg-gold/20 border border-gold/30 text-gold-light text-xs font-bold rounded-lg uppercase tracking-wider backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 space-y-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 space-y-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Project Overview</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center">
                      <CheckCircle2 className="text-gold mr-2" size={20} />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-600 dark:text-zinc-400">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-gold rotate-45 mt-2 mr-3 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar Links */}
                <div className="lg:w-1/3 space-y-6">
                  <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Links</h4>
                    <div className="space-y-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 w-full btn-primary text-sm py-2 px-4 shadow-gold/10"
                      >
                        <Globe size={18} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 w-full btn-secondary text-sm py-2 px-4"
                      >
                        <Github size={18} />
                        <span>GitHub Repo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
