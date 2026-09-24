import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { FiGlobe, FiMapPin } from 'react-icons/fi';
import { experience, education } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-neutral-300 font-medium text-sm sm:text-base">
          <FaGraduationCap className="text-neutral-400" size={18} />
          <span>Education & Background</span>
        </div>
      </div>

      {/* Horizontal Cards Grid (2-column layout matching reference image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-sm p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-700/80 transition-all group"
          >
            {/* Top row: Icon + Title & Company */}
            <div className="flex items-start gap-3.5 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center text-white shrink-0 group-hover:border-neutral-600 transition-colors">
                <FaBriefcase size={16} className="text-neutral-300" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-0.5">
                  {item.company}
                </p>
              </div>
            </div>

            {/* Bottom row: Location + Status Badge */}
            <div className="flex items-center justify-between pt-2 text-xs text-neutral-400 border-t border-neutral-800/60">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <FiMapPin size={13} className="text-neutral-500" />
                <span>{item.location}</span>
              </div>

              {item.isCurrent ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-[11px] font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Present
                </span>
              ) : (
                <span className="text-xs font-mono text-neutral-500">
                  {item.status}
                </span>
              )}
            </div>
          </motion.div>
        ))}

        {/* Education Item in Card Layout */}
        {education.map((edu, i) => (
          <motion.div
            key={`edu-${edu.id}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (experience.length + i) * 0.1 }}
            className="rounded-xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-sm p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-700/80 transition-all group"
          >
            <div className="flex items-start gap-3.5 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center text-white shrink-0 group-hover:border-neutral-600 transition-colors">
                <FaGraduationCap size={18} className="text-neutral-300" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug">
                  {edu.course}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-0.5">
                  {edu.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-neutral-400 border-t border-neutral-800/60">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <FiGlobe size={13} className="text-neutral-500" />
                <span>{edu.grade}</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {edu.duration}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
