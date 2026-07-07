import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiDjango, SiMysql, SiVite,
} from 'react-icons/si';

const techStack = [
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Django', icon: SiDjango },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Vite', icon: SiVite },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title"><span className="gradient-text">About</span> Me</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 py-5 px-3 rounded-lg border border-gray-200 bg-white hover:border-black transition-colors group"
            >
              <tech.icon
                size={28}
                className="text-gray-400 group-hover:text-black transition-colors"
              />
              <span className="text-xs text-gray-500 group-hover:text-black font-medium transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
