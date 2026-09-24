import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaAward, FaSearchPlus } from 'react-icons/fa';
import { certificates } from '../data/portfolio';

import kodnestImg from '../img/kodnest.png';
import codelab1Img from '../img/codelab1.jpeg';
import codelab2Img from '../img/codelab2.jpeg';

const imageMap = {
  kodnest: kodnestImg,
  codelab1: codelab1Img,
  codelab2: codelab2Img,
};

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-neutral-300 font-medium text-sm sm:text-base">
          <FaAward className="text-neutral-400" size={15} />
          <span>Certifications</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((cert, i) => {
          const img = imageMap[cert.imageKey];
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="rounded-xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-sm overflow-hidden cursor-pointer group hover:border-neutral-700/80 transition-all flex flex-col justify-between"
            >
              {/* Image area */}
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden flex items-center justify-center border-b border-neutral-800/80">
                {img ? (
                  <img
                    src={img}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <FaAward size={32} className="text-neutral-600" />
                    <span className="text-xs text-neutral-400 font-mono">{cert.title}</span>
                  </div>
                )}
                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black">
                    <FaSearchPlus size={14} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>{cert.issuer}</span>
                  <span className="text-neutral-500">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl"
            >
              <button
                id="close-certificate-modal"
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors"
              >
                <HiX size={16} />
              </button>
              <div className="p-2 bg-black">
                <img
                  src={imageMap[selected.imageKey]}
                  alt={selected.title}
                  className="w-full h-auto max-h-[65vh] object-contain rounded-lg"
                />
              </div>
              <div className="p-4 border-t border-neutral-800 bg-neutral-900">
                <h3 className="text-base font-semibold text-white">{selected.title}</h3>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">
                  {selected.issuer} · {selected.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
