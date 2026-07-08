import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <a 
          href="#home" 
          onClick={(e) => { 
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }} 
          className="text-4xl font-extrabold tracking-tighter"
        >
          <span className="bg-gradient-to-br from-green-400 via-green-600 to-black bg-clip-text text-transparent drop-shadow-md">
            V
          </span>
        </a>
      </div>
    </header>
  );
}
