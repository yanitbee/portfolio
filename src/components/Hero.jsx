import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, GithubIcon, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-midnight-50 dark:bg-[#0b1120] tibeb-pattern">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Glowing Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative w-40 h-40 rounded-full border-4 border-white/10 dark:border-white/5 overflow-hidden shadow-[0_0_30px_rgba(14,165,233,0.4)] z-10 glass">
            {/* Placeholder for real avatar, using a stylized icon/gradient for now */}
            <div className="w-full h-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-5xl font-bold">
              Y<span className="text-primary-100">.</span>
            </div>
          </div>
          
          {/* Orbital rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 max-w-3xl flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-midnight-900 dark:text-white tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-400 to-accent text-glow-cyan">Yanit</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-300">
            I'm a <span className="text-primary">Full-Stack Web Developer</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block ml-1 w-1 h-8 bg-primary -mb-1"
            ></motion.span>
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I create beautiful, responsive web experiences using modern technologies. Passionate about clean code and user-centered design.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 pt-6"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-primary flex items-center justify-center cursor-pointer group"
            >
              View My Work
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
            className="flex items-center space-x-8 text-zinc-400 dark:text-midnight-400 pt-10"
          >
            <a href="https://github.com/yanitbee" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all"><GithubIcon size={24} /></a>
            <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Twitter size={24} /></a>
            <a href="mailto:yanithaftomm@gmail.com" className="hover:text-primary hover:scale-110 transition-all"><Mail size={24} /></a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

