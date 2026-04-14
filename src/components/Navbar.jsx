import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  Sun, Moon, Menu, X, Code2, 
  Home, User, FolderGit2, Wrench, Mail
} from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, toggleTheme] = useDarkMode();

  const navLinks = [
    { label: 'Home', to: 'home', icon: Home },
    { label: 'About', to: 'about', icon: User },
    { label: 'Projects', to: 'projects', icon: FolderGit2 },
    { label: 'Skills', to: 'skills', icon: Wrench },
    { label: 'Contact', to: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Sidebar */}
      <nav className="hidden md:flex flex-col items-center justify-center fixed left-6 top-1/2 -translate-y-1/2 z-50 glass-pill py-8 px-4 rounded-full space-y-6">
        <Link 
          to="home" 
          spy={true} smooth={true} duration={500} 
          className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-[0_0_15px_rgba(14,165,233,0.3)] cursor-pointer hover:scale-110 transition-transform mb-4"
        >
          <Code2 size={24} />
        </Link>
        
        <div className="w-10 h-[1px] bg-zinc-300 dark:bg-white/10 mb-2"></div>

        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative group p-3 rounded-full text-zinc-500 hover:text-primary transition-all duration-300 cursor-pointer hover:bg-primary/5"
            activeClass="text-primary bg-primary/10 shadow-[0_0_10px_rgba(14,165,233,0.2)]"
          >
            <link.icon size={22} className="group-hover:scale-110 transition-transform"/>
            {/* Tooltip */}
            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-midnight-950 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-md">
              {link.label}
            </span>
          </Link>
        ))}

        <div className="w-10 h-[1px] bg-zinc-300 dark:bg-white/10 mt-2 mb-4"></div>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-full text-zinc-500 hover:text-primary hover:bg-primary/5 transition-all duration-300"
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </nav>

      {/* Mobile Top Header */}
      <nav className={`md:hidden fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-4'}`}>
        <div className="px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-[0_0_10px_rgba(14,165,233,0.3)]">
              <Code2 size={24} />
            </div>
            <span className="text-xl font-bold font-sans tracking-tight text-zinc-900 dark:text-white">
              Yanit<span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="text-zinc-500 hover:text-primary">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-500 hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden glass fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold backdrop-blur-xl">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-primary"
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
              className="flex items-center space-x-4 text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors"
            >
              <link.icon size={28} className="text-primary" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;

