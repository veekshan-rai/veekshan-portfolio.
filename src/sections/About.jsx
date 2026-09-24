import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const stackCategories = [
  {
    title: 'LANGUAGES',
    items: ['javascript', 'python', 'java', 'html5', 'css3'],
  },
  {
    title: 'WEB & FRAMEWORKS',
    items: ['react', 'django', 'spring boot', 'tailwind', 'vite', 'rest apis'],
  },
  {
    title: 'DATABASES & TOOLS',
    items: ['mysql', 'git', 'github', 'linux', 'ai tools'],
  },
];

export default function About() {
  return (
    <section id="about" className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-neutral-300 font-medium text-sm sm:text-base">
          <FaCode className="text-neutral-400" size={15} />
          <span>Technologies & Stack</span>
        </div>
      </div>

      {/* Categorized Terminal-Style Stack Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative rounded-xl border border-neutral-800/90 bg-[#090b0e]/90 p-5 sm:p-6 backdrop-blur-sm overflow-hidden"
      >
        {/* Subtle Ambient Code Rain Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 space-y-6">
          {stackCategories.map((category, index) => (
            <div
              key={category.title}
              className={`space-y-3 ${
                index !== stackCategories.length - 1
                  ? 'border-b border-neutral-800/70 pb-6'
                  : ''
              }`}
            >
              {/* Category Title */}
              <h3 className="text-xs font-mono tracking-widest text-neutral-400 font-semibold uppercase">
                {category.title}
              </h3>

              {/* Items Flex Wrap Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs sm:text-sm text-cyan-200/90 bg-[#0d1627]/90 border border-cyan-900/60 rounded-md px-3.5 py-1.5 hover:border-cyan-500/80 hover:text-cyan-100 hover:bg-[#121f38] transition-all duration-200 shadow-sm cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
