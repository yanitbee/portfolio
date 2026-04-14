import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { CoffeeBean } from './EthiopianIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-950 dark:bg-midnight-950 border-t-4 border-primary py-16 relative overflow-hidden tibeb-pattern">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#009b4d] via-[#ffcd00] to-[#ef3340] opacity-80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2 text-midnight-900 dark:text-white font-bold text-xl tracking-tight">
               <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20 font-serif">ያ</div>
               <span>Yanit<span className="text-primary">.</span></span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm flex items-center">
              © {currentYear} Yanit. Built with <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> & React.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-zinc-400 dark:text-midnight-400">
             <a href="https://github.com/yanitbee" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                <Github size={22} />
             </a>
             <a href="#" className="hover:text-primary dark:hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin size={22} />
             </a>
             <a href="#" className="hover:text-primary dark:hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                <Twitter size={22} />
             </a>
             <a href="mailto:yanithaftomm@gmail.com" className="hover:text-primary dark:hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                <Mail size={22} />
             </a>
          </div>

          {/* Back to Top */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-3 bg-white dark:bg-midnight-900 rounded-full border border-zinc-100 dark:border-white/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-lg group relative"
          >
            <CoffeeBean className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <ArrowUp size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

