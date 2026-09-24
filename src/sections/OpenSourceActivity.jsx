import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { openSourceContributions, social } from '../data/portfolio';

export default function OpenSourceActivity() {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-neutral-300 font-medium text-sm sm:text-base">
          <FaGithub className="text-neutral-400" size={16} />
          <span>Open source contributions</span>
        </div>
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all flex items-center gap-1"
        >
          View all <FiArrowUpRight size={12} />
        </a>
      </div>

      {/* Unified Card Container with Divide-y */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-sm overflow-hidden divide-y divide-neutral-800/70"
      >
        {openSourceContributions.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 sm:grid-cols-12 items-center p-4 sm:px-5 sm:py-3.5 hover:bg-neutral-800/30 transition-colors duration-200 gap-2 sm:gap-4"
          >
            {/* Left Repo Name */}
            <div className="sm:col-span-5 flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
              <span>{item.repoOwner}</span>
              <span className="text-neutral-600">/</span>
              <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {item.repoName}
              </span>
            </div>

            {/* Right Commit / Feature Description */}
            <div className="sm:col-span-6 text-xs sm:text-sm text-neutral-400 font-mono line-clamp-1 group-hover:text-neutral-300 transition-colors">
              {item.description}
            </div>

            {/* GitHub Icon */}
            <div className="sm:col-span-1 flex justify-end text-neutral-500 group-hover:text-white transition-colors">
              <FaGithub size={16} />
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
