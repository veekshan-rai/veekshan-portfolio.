import React, { useState, useEffect } from 'react';
import {
  FiHome,
  FiBriefcase,
  FiGrid,
  FiTerminal,
  FiMail,
  FiAward
} from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'Projects', href: '#projects', icon: FiBriefcase }, // Using briefcase for projects if we follow image, or we can use FiGrid. The image has Briefcase 2nd. Let's map to user's sections.
  { name: 'Experience', href: '#experience', icon: FiGrid }, 
  { name: 'Certificates', href: '#certificates', icon: FiTerminal }, 
  { name: 'Contact', href: '#contact', icon: FiMail },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <nav className="flex items-center gap-2 p-2 rounded-full border border-neutral-800/80 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              title={item.name}
              className={`relative flex items-center justify-center w-12 h-12 rounded-[16px] transition-all duration-300 ${
                isActive
                  ? 'bg-blue-950/40 border border-blue-500/60 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                  : 'bg-[#141414] border border-white/5 text-neutral-500 hover:bg-[#1f1f1f] hover:text-neutral-300 hover:border-white/10'
              }`}
            >
              <Icon className="text-xl" />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
