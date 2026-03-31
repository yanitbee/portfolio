import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Laptop, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Decorative side panel (Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block w-1/3 relative"
          >
            <div className="aspect-[4/5] bg-accent rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
                alt="Working" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <p className="text-3xl font-bold italic">“Code is my craft.”</p>
                <div className="flex items-center space-x-2 text-white/80">
                  <Sparkles size={16} />
                  <span>Passionate Developer</span>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-3xl"></div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:w-2/3 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-accent font-semibold tracking-wider uppercase text-sm">About Me</h2>
              <h3 className="text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                Computer Science Graduate & Full-Stack Enthusiast
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-accent">
                  <GraduationCap size={24} />
                  <h4 className="text-lg font-semibold dark:text-white">Education</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  As a Computer Science graduate, I have built a strong theoretical foundation in algorithms, data structures, and software engineering principles.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-accent">
                  <Laptop size={24} />
                  <h4 className="text-lg font-semibold dark:text-white">Passion</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  I am deeply passionate about web and mobile development, specifically building full-stack applications with React, Node.js, and MongoDB.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none"
            >
              <p className="text-lg text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                “I am a fast learner, detail-oriented, and focused on delivering high-quality work. My goal is to create scalable, user-centric solutions that provide real value to businesses and users alike.”
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {['Detail-Oriented', 'Problem Solver', 'Team Player', 'Fast Learner'].map((trait) => (
                  <span 
                    key={trait} 
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold rounded-full uppercase tracking-wider"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
