import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, GithubIcon, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';
import { Sini, CoffeeBean } from './EthiopianIcons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-midnight-50 dark:bg-midnight-950 tibeb-pattern">
      {/* Ge'ez Watermarks */}
      <div className="geez-watermark top-10 -left-10 rotate-12 text-gold">ጥበብ</div>
      <div className="geez-watermark bottom-40 -right-20 -rotate-12 text-gold">ተስፋ</div>
      <div className="geez-watermark top-1/2 left-1/3 opacity-[0.02] dark:opacity-[0.01]">ያኒት</div>

      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-700" />
      
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
              className="text-gold font-bold tracking-[0.2em] uppercase text-xs flex items-center"
            >
              <span className="w-8 h-[1px] bg-gold mr-3"></span>
              Available for Freelance
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold text-midnight-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-400 to-gold-600">Yanit</span>
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
            className="flex items-center space-x-6 text-zinc-400 dark:text-midnight-400 pt-8"
          >
            <a href="#" className="hover:text-gold transition-colors"><GithubIcon size={24} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Mail size={24} /></a>
          </motion.div>
        </motion.div>

        {/* Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full h-[500px] flex items-center justify-center">
            {/* Ethiopian Coffee Culture Illustration (Sini) */}
            <div className="relative w-full h-full flex items-center justify-center group">
              {/* Animated Glowing Ring */}
              <div className="absolute w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-spin-slow"></div>
              
              {/* Sini (Coffee Cup) Central Piece */}
              <div className="relative z-20 transform hover:scale-110 transition-transform duration-500 cursor-pointer">
                <Sini className="w-64 h-64 text-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-bounce-subtle" />
                
                {/* Coffee Beans Floating */}
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-10 -right-5"
                >
                  <CoffeeBean className="w-12 h-12 text-gold-700 opacity-80" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 -left-10"
                >
                  <CoffeeBean className="w-10 h-10 text-gold-800 opacity-60" />
                </motion.div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gold/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
