import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Laptop, Sparkles } from 'lucide-react';
import { CoffeeBean } from './EthiopianIcons';

const About = () => {
  return (
    <section id="about" className="bg-midnight-50 dark:bg-midnight-900/40 relative overflow-hidden tibeb-pattern">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Decorative side panel (Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block w-1/3 relative"
          >
            <div className="aspect-[4/5] bg-gold rounded-3xl overflow-hidden relative shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
                alt="Ethiopian Coffee" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <p className="text-3xl font-bold italic">“ጥበብ በገንዘብ አይገዛም”</p>
                <div className="flex items-center space-x-2 text-gold-200">
                  <CoffeeBean className="w-5 h-5" />
                  <span className="font-medium">Wisdom is priceless</span>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-3xl opacity-30"></div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:w-2/3 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-xs flex items-center">
                <span className="w-8 h-[1px] bg-gold mr-3"></span>
                About Me
              </h2>
              <h3 className="text-4xl font-bold text-midnight-900 dark:text-white leading-tight">
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
                <div className="flex items-center space-x-3 text-gold">
                  <CoffeeBean className="w-6 h-6" />
                  <h4 className="text-lg font-semibold dark:text-white">Education</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  As a Computer Science graduate, I have built a strong theoretical foundation in algorithms, data structures, and software engineering principles.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gold">
                  <CoffeeBean className="w-6 h-6" />
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
                    className="px-4 py-2 bg-gold/10 dark:bg-gold/5 text-gold-700 dark:text-gold-300 text-xs font-bold rounded-full uppercase tracking-wider border border-gold/20"
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
