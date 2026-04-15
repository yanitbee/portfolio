import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layers, Smartphone } from 'lucide-react';
import { SiCss3, SiHtml5, SiJavascript, SiMongodb, SiReact } from 'react-icons/si';

const Skills = () => {
  const topSkills = [
    { name: 'React & Next.js', percentage: 95, icon: Globe },
    { name: 'Node.js & Express', percentage: 88, icon: Database },
    { name: 'Tailwind CSS', percentage: 92, icon: Layers },
    { name: 'MongoDB', percentage: 85, icon: Database },
    { name: 'React Native', percentage: 82, icon: Smartphone },
  ];
  const floatingTechIcons = [
    {
      name: 'HTML',
      Icon: SiHtml5,
      className: 'top-8 left-10 text-orange-400',
      duration: 4.5,
      delay: 0,
      y: -18,
    },
    {
      name: 'CSS',
      Icon: SiCss3,
      className: 'top-16 right-8 text-sky-400',
      duration: 5,
      delay: 0.4,
      y: 18,
    },
    {
      name: 'React',
      Icon: SiReact,
      className: 'top-1/2 -right-2 text-cyan-300',
      duration: 5.5,
      delay: 0.8,
      y: -15,
    },
    {
      name: 'JavaScript',
      Icon: SiJavascript,
      className: 'bottom-16 left-8 text-amber-300',
      duration: 4.8,
      delay: 1.2,
      y: 16,
    },
    {
      name: 'MongoDB',
      Icon: SiMongodb,
      className: 'bottom-8 right-12 text-emerald-400',
      duration: 5.2,
      delay: 1.6,
      y: -20,
    },
  ];

  return (
    <section id="skills" className="bg-midnight-50 dark:bg-[#0b1120] relative overflow-hidden py-32 border-t border-white/5">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side Decorative/Illustration */}
          <div className="lg:w-1/2 w-full relative hidden lg:flex justify-center">
            {/* Glowing Orbital Rings and Floating Elements */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-primary/20 rounded-full animate-[spin_12s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
              
              {floatingTechIcons.map(({ name, Icon, className, duration, delay, y }) => (
                <motion.div
                  key={name}
                  animate={{ y: [0, y, 0] }}
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
                  className={`absolute p-4 bg-[#0b1120] border border-primary/25 rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.25)] ${className}`}
                >
                  <Icon size={30} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Skills List */}
          <div className="lg:w-1/2 w-full space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-midnight-900 dark:text-white">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow-cyan">Skills</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto lg:mx-0">
                I'm a passionate web developer with experience in creating modern, responsive applications. I specialize in full-stack development using cutting-edge technologies to deliver exceptional user experiences.
              </p>
            </div>

            <div className="space-y-6">
              {topSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center text-sm font-medium">
                    <div className="flex items-center space-x-3 text-zinc-300">
                      <skill.icon size={18} className="text-primary" />
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-primary">{skill.percentage}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full h-2.5 bg-midnight-950/50 rounded-full overflow-hidden border border-white/5">
                    {/* Progress Bar Fill */}
                    <motion.div 
                      key="progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)] relative"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[1px]"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

