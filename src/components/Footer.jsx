import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2 text-zinc-900 dark:text-white font-bold text-xl tracking-tight">
               <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-accent/20">Y</span>
               <span>Yanit<span className="text-accent">.</span></span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm flex items-center">
              © {currentYear} Yanit. Built with <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> & React.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-zinc-400 dark:text-zinc-600">
             <a href="#" className="hover:text-accent dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <Github size={22} />
             </a>
             <a href="#" className="hover:text-accent dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <Linkedin size={22} />
             </a>
             <a href="#" className="hover:text-accent dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <Twitter size={22} />
             </a>
             <a href="#" className="hover:text-accent dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                <Mail size={22} />
             </a>
          </div>

          {/* Back to Top */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-4 bg-white dark:bg-zinc-800 rounded-full border border-zinc-100 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500 hover:text-accent dark:hover:text-white hover:border-accent dark:hover:border-accent transition-all duration-300 cursor-pointer shadow-sm group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
