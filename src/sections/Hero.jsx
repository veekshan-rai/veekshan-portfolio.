import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-black leading-tight mb-6"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-8 h-8"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2500,
              'React Developer',
              2500,
              'Python & Django Developer',
              2500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gray-500 font-medium"
          />
        </motion.div>

        {/* About */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.about}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            id="download-resume"
            href={personalInfo.resumeUrl}
            download
            className="px-7 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
          >
            <FaDownload size={13} />
            Download Resume
          </a>
          <a
            id="contact-cta"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-black flex items-center gap-2 hover:border-violet-500 hover:text-violet-600 hover:-translate-y-0.5 transition-all"
          >
            Contact Me
            <FaArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
