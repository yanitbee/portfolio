import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Plus } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer bg-white dark:bg-midnight-950 rounded-3xl overflow-hidden border border-zinc-100 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
      onClick={() => onClick(project)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Overlay Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-midnight-950 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl shadow-gold/40">
              <Plus size={24} />
           </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span 
              key={t} 
              className="px-2 py-0.5 bg-gold/10 dark:bg-gold/5 text-gold-700 dark:text-gold-300 text-[10px] font-bold rounded-lg uppercase tracking-wider border border-gold/10"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">+{project.tech.length - 3} More</span>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-gold">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-2 flex items-center text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Explore Case Study</span>
          <ExternalLink className="ml-2" size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
