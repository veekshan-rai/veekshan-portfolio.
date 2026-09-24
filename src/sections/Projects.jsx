import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects, social } from '../data/portfolio';

// Project images
import cashNestImg from '../img/CashNest.jpg';
import quickBiteImg from '../img/quickbite.jpg';
import trendFeetImg from '../img/trendfeet.jpg';
import recipeBookImg from '../img/recipebook.jpg';

const projectImages = {
  CashNest: cashNestImg,
  QuickBite: quickBiteImg,
  'Trend Feet': trendFeetImg,
  'Recipe Book': recipeBookImg,
};

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      {/* Vertical List Grid */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6 sm:py-8 border-b border-neutral-800/50 last:border-0"
          >
            {/* Left: Project Image Squircle */}
            <div className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-gradient-to-br ${project.gradient} p-0.5 shadow-xl overflow-hidden`}>
              <div className="w-full h-full rounded-[14px] overflow-hidden">
                {projectImages[project.title] ? (
                  <img
                    src={projectImages[project.title]}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0c0d0e]/80 rounded-[14px] flex items-center justify-center text-3xl sm:text-4xl">
                    {project.emoji}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Content container */}
            <div className="flex-1 min-w-0 w-full pt-1">
              {/* Header Row: Dot + Title & Year */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <h3 className="text-lg font-bold text-white tracking-tight lowercase">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs text-neutral-500 font-mono">
                  {project.year || '2024'}
                </span>
              </div>

              {/* Description */}
              <p className="text-[13px] sm:text-sm text-neutral-400 leading-relaxed mb-5 lowercase">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[11px] font-mono rounded bg-blue-950/20 text-blue-300 border border-blue-900/40 lowercase"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links Row */}
              <div className="flex items-center gap-5 text-[13px] font-mono text-blue-600">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    github <FiArrowUpRight size={14} />
                  </a>
                )}
                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    site <FiArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
