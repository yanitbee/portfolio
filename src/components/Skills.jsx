import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-midnight-950 relative overflow-hidden tibeb-pattern">
      <div className="geez-watermark top-1/4 -right-10 rotate-45 text-gold opacity-5">ጥበብ</div>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header */}
          <div className="lg:w-1/3 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-[0.2em] uppercase text-xs flex items-center"
            >
              <span className="w-8 h-[1px] bg-gold mr-3"></span>
              Expertise
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-extrabold text-midnight-900 dark:text-white leading-tight"
            >
              My Technical <span className="text-gold">Toolbox</span>
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
                className="p-8 bg-white dark:bg-midnight-900/50 rounded-3xl border border-zinc-100 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-2xl text-gold group-hover:bg-gold group-hover:text-midnight-950 transition-all duration-300">
                    <skillGroup.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white group-hover:text-gold transition-colors">
                    {skillGroup.name}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-midnight-50 dark:bg-midnight-800/50 text-midnight-600 dark:text-midnight-300 text-xs font-bold rounded-xl border border-zinc-100 dark:border-white/5 transition-colors"
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
