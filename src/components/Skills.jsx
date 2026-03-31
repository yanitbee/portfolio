import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="bg-zinc-50 dark:bg-zinc-900/50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header */}
          <div className="lg:w-1/3 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm"
            >
              Expertise
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight"
            >
              My Technical <span className="text-accent">Toolbox</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              I use a modern stack to build robust and scalable applications. My focus is on creating clean, maintainable code other developers love.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <skillGroup.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white group-hover:text-accent transition-colors">
                    {skillGroup.name}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 text-xs font-bold rounded-xl border border-zinc-100 dark:border-zinc-800 group-hover:border-accent/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
