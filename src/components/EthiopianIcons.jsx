import React from 'react';
import { motion } from 'framer-motion';

export const Sini = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sini Cup Body */}
    <path d="M40 80C40 80 40 160 100 160C160 160 160 80 160 80H40Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="4"/>
    {/* Traditional Pattern on Cup */}
    <path d="M60 100L80 120L100 100L120 120L140 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 115L80 135L100 115L120 135L140 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Base of Sini */}
    <rect x="80" y="160" width="40" height="8" rx="4" fill="currentColor"/>
    {/* Steam/Spirit */}
    <motion.path 
      animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      d="M90 60C90 60 85 50 90 40M110 60C110 60 115 50 110 40M100 55C100 55 95 45 100 35" 
      stroke="currentColor" strokeWidth="3" strokeLinecap="round"
    />
  </svg>
);

export const CoffeeBean = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="50" cy="50" rx="40" ry="30" fill="currentColor"/>
    <path d="M20 50C20 50 50 70 80 50" stroke="white" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round"/>
  </svg>
);
