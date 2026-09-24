import React, { useState, useEffect } from 'react';
import { FiClock, FiFileText, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

export default function Header() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: Sep 24, 2026 · 09:32 PM
      const datePart = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      const timePart = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTimeString(`${datePart} · ${timePart}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToHome = (e) => {
    e.preventDefault();
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full max-w-3xl mx-auto pt-6 pb-2 px-4 flex items-center justify-between gap-4">
      {/* Left side: Brand Logo + Current Date & Time */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="#home"
          onClick={scrollToHome}
          className="text-xs sm:text-sm font-bold tracking-wider text-white hover:text-emerald-400 uppercase transition-colors shrink-0"
        >
          VR<span className="text-emerald-500">.</span>
        </a>

        {/* Live Date & Time Display */}
        {timeString && (
          <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-neutral-400 bg-neutral-900/60 border border-neutral-800/80 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>{timeString}</span>
          </div>
        )}
      </div>

      {/* Right side: Resume Nav Link */}
      <div className="flex items-center gap-3">
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="text-xs sm:text-sm font-medium text-neutral-300 hover:text-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 hover:border-neutral-700 hover:bg-neutral-800/60 transition-all flex items-center gap-1.5"
        >
          <FiFileText size={13} className="text-emerald-400" />
          <span>Resume</span>
          <FiDownload size={11} className="text-neutral-400" />
        </a>
      </div>
    </header>
  );
}
