import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, GithubIcon, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-semibold tracking-wider uppercase text-sm"
            >
              Available for Freelance
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-500">Yanit</span>
            </motion.h1>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300"
            >
              Web & Mobile App Developer
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed"
            >
              I build responsive websites and scalable applications that help businesses grow. Specializing in modern full-stack development with a focus on performance and user experience.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-primary flex items-center justify-center cursor-pointer group"
            >
              View Projects
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-secondary flex items-center justify-center cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-6 text-zinc-400 dark:text-zinc-600 pt-8"
          >
            <a href="#" className="hover:text-accent transition-colors"><GithubIcon size={24} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail size={24} /></a>
          </motion.div>
        </motion.div>

        {/* Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full h-[500px] flex items-center justify-center">
            {/* Minimalist Developer Illustration with SVG patterns */}
            <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden group shadow-2xl relative">
              {/* Animated Floating Elements */}
              <div className="absolute top-10 right-10 p-4 glass rounded-xl animate-bounce duration-[3000ms]">
                <Code2 className="text-accent" size={32} />
              </div>
              <div className="absolute bottom-20 left-10 p-4 glass rounded-xl animate-bounce delay-1000 duration-[4000ms]">
                <Smartphone className="text-primary-500" size={32} />
              </div>
              
              {/* The "Profile" Body */}
              <div className="relative w-64 h-64 bg-accent/20 rounded-full flex items-center justify-center overflow-hidden border-4 border-accent shadow-2xl group-hover:scale-105 transition-transform duration-500">
                 {/* Stylized Face Silhouette */}
                 <div className="absolute bottom-0 w-48 h-48 bg-zinc-800 dark:bg-zinc-200 rounded-full transform translate-y-12"></div>
                 <div className="w-24 h-24 bg-zinc-700 dark:bg-zinc-300 rounded-full mb-12"></div>
              </div>
              
              {/* Code Snippet Floating */}
              <div className="absolute bottom-10 right-10 p-4 glass rounded-xl max-w-[200px] space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="h-2 w-16 bg-accent rounded"></div>
                <div className="h-2 w-12 bg-zinc-500 rounded"></div>
                <div className="h-2 w-20 bg-zinc-400 rounded"></div>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-accent/5 to-primary-500/5 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable icons for the illustration
const Code2 = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
  </svg>
);

const Smartphone = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
);

export default Hero;
