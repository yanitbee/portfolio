import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  Github, 
  ExternalLink 
} from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, toggleTheme] = useDarkMode();

  const navLinks = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Projects', to: 'projects' },
    { label: 'Skills', to: 'skills' },
    { label: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 tibeb-border ${
      scrolled ? 'nav-scrolled py-4 glass' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-midnight-950 shadow-lg shadow-gold/20">
              <Code2 size={24} />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-xs font-bold text-gold uppercase tracking-widest opacity-80">ያኒት</span>
              <span className="text-xl font-bold font-sans tracking-tight text-zinc-900 dark:text-white">
                Yanit<span className="text-gold">.</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="text-gold dark:text-gold font-semibold"
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-gold dark:hover:text-gold transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden glass absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 text-2xl font-semibold">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2"
          >
            <X size={32} />
          </button>
          
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
