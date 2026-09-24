import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { personalInfo, social } from '../data/portfolio';

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub,   href: social.github,                  label: 'GitHub' },
    { icon: FaLinkedin, href: social.linkedin,                 label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${social.email}`,        label: 'Email' },
    { icon: FaFileAlt,  href: personalInfo.resumeUrl,          label: 'Resume', download: true },
  ];

  return (
    <section id="home" className="w-full pt-6 pb-4">

      {/* ── Avatar + Identity ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-5 mb-6"
      >
        {/* Logo avatar */}
        <div className="relative shrink-0">
          <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-lg shadow-emerald-950/30">
            <img
              src="/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Available dot */}
          <span
            className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#0c0d0e] rounded-full"
            title="Available for opportunities"
          />
        </div>

        {/* Name + role */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            {personalInfo.name}
          </h1>
          <p className="text-sm sm:text-base text-emerald-400 font-mono mt-0.5 tracking-wide">
            Full Stack Developer
          </p>
        </div>
      </motion.div>

      {/* ── Social links ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-4 text-neutral-400 mb-6"
      >
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.download ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={item.download || undefined}
            title={item.label}
            className="hover:text-emerald-400 transition-colors duration-200 text-[18px]"
          >
            <item.icon />
          </a>
        ))}
      </motion.div>

      {/* ── About paragraph ── */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed max-w-2xl"
      >
        {personalInfo.about}
      </motion.p>

    </section>
  );
}
