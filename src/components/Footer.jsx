import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { social } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-200 bg-white">
      {/* Back to top */}
      <div className="flex justify-center -mt-5">
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          aria-label="Back to top"
        >
          <FaArrowUp size={14} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 pb-28">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 pt-8 border-t border-gray-100">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:border-transparent transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:border-transparent transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${social.email}`}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:border-transparent transition-all"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Built with <FaHeart className="text-violet-600 text-xs" /> by{' '}
              <span className="gradient-text font-semibold">Veekshan Rai</span> ·{' '}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
