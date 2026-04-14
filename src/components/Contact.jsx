import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  ExternalLink, 
  Send, 
  MessageSquare,
  User,
  AtSign
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! This is a demo form.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white dark:bg-midnight-950 relative overflow-hidden tibeb-pattern">
      <div className="geez-watermark bottom-0 left-0 text-primary opacity-10">ያኒት</div>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-[0.2em] uppercase text-xs flex items-center"
              >
                <span className="w-8 h-[1px] bg-primary mr-3"></span>
                Connect
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold text-midnight-900 dark:text-white leading-tight"
              >
                Let's <span className="text-primary">Talk</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
              </motion.p>
            </div>

            <div className="space-y-6">
              <a href="mailto:yanithaftomm@gmail.com" className="flex items-center space-x-4 p-4 glass rounded-2xl border border-zinc-100 dark:border-white/10 hover:border-primary/30 transition-all group">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email Me</h4>
                    <p className="text-zinc-900 dark:text-white font-medium">yanithaftomm@gmail.com</p>
                </div>
              </a>

               <a 
                href="https://github.com/yanitbee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-primary group transition-all"
               >
                <div className="p-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all">
                  <Github size={24} />
                </div>
                <div className="flex-grow">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">GitHub</h4>
                    <p className="text-zinc-900 dark:text-white font-medium flex items-center">
                        yanitbee
                        <ExternalLink className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                    </p>
                </div>
              </a>


            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-2/3 p-8 sm:p-12 bg-midnight-50 dark:bg-midnight-950 rounded-3xl border border-zinc-100 dark:border-white/10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-50" />
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1 flex items-center">
                    <User size={14} className="mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your Name"
                    className="w-full p-4 bg-white dark:bg-midnight-800 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-zinc-900 dark:text-white dark:placeholder-zinc-500 transition-all font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1 flex items-center">
                    <AtSign size={14} className="mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-4 bg-white dark:bg-midnight-800 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-zinc-900 dark:text-white dark:placeholder-zinc-500 transition-all font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1 flex items-center">
                  <MessageSquare size={14} className="mr-2" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="6"
                  placeholder="How can I help you?"
                  className="w-full p-4 bg-white dark:bg-midnight-800 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-zinc-900 dark:text-white dark:placeholder-zinc-500 transition-all font-medium resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white font-bold flex items-center justify-center space-x-3 py-4 rounded-xl shadow-lg shadow-primary/20"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

