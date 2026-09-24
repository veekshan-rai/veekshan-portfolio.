import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { social, personalInfo } from '../data/portfolio';

export default function Contact() {
  const contactRows = [
    {
      id: 'email',
      icon: FaEnvelope,
      label: 'email',
      value: social.email,
      href: `mailto:${social.email}`,
    },
    {
      id: 'github',
      icon: FaGithub,
      label: 'github',
      value: '@veekshan-rai',
      href: social.github,
    },
    {
      id: 'linkedin',
      icon: FaLinkedin,
      label: 'linkedin',
      value: '/in/veekshan-rai-7172132a3/',
      href: social.linkedin,
    },
    {
      id: 'resume',
      icon: FaFileAlt,
      label: 'resume',
      value: 'veekshan-resume.pdf',
      href: personalInfo.resumeUrl,
      download: true,
    },
  ];

  return (
    <section id="contact" className="w-full">
      {/* Section Header with Keyboard Shortcut Badge */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xs font-mono tracking-widest text-neutral-400 font-semibold uppercase">
          CONTACT
        </h3>
        <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-800/80 border border-neutral-700/60 text-neutral-400">
          c
        </span>
      </div>

      {/* Full-width Row-based List Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full border-y border-neutral-800/80 divide-y divide-neutral-800/80"
      >
        {contactRows.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.download ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={item.download ? true : undefined}
            className="group flex items-center justify-between py-4 px-2 sm:px-3 hover:bg-neutral-900/50 transition-colors duration-200"
          >
            {/* Left: Icon + Label */}
            <div className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
              <item.icon className="text-neutral-400 group-hover:text-neutral-200 transition-colors" size={16} />
              <span className="font-mono text-sm sm:text-base font-medium">
                {item.label}
              </span>
            </div>

            {/* Right: Handle / Email + Up-Right Arrow */}
            <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-neutral-400 group-hover:text-white transition-colors">
              <span>{item.value}</span>
              <FiArrowUpRight size={14} className="text-neutral-500 group-hover:text-neutral-200 transition-colors" />
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
