import { motion } from 'framer-motion';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle">My academic journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-[11px] top-1 w-[10px] h-[10px] rounded-full bg-black border-2 border-white" />

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:border-gray-400 transition-colors">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-base font-bold text-black">{edu.institution}</h3>
                      <p className="text-sm text-gray-500">{edu.course}</p>
                    </div>
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-black mb-2">{edu.grade}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
