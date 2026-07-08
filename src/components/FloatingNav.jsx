import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 300) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-max px-4">
      <div className="bg-gradient-to-r from-black via-green-950 to-black backdrop-blur-md px-6 py-3 rounded-2xl sm:rounded-full border border-green-900/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`text-xs sm:text-sm font-semibold transition-all ${
              activeSection === link.href.slice(1)
                ? 'text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)] scale-105'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
