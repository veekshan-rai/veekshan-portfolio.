import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-4 py-8 mt-6">
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>built with react · vite</span>
        <span>© {new Date().getFullYear()} veekshan</span>
      </div>
    </footer>
  );
}
