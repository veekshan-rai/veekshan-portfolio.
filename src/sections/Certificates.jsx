import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaAward, FaSearchPlus } from 'react-icons/fa';
import { certificates } from '../data/portfolio';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Certificates</span></h2>
          <p className="section-subtitle">Certifications that showcase my learning</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white cursor-pointer group hover:border-gray-400 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center flex-col gap-3 bg-gray-50"
                  style={{ display: 'none' }}
                >
                  <FaAward size={40} className="text-gray-300" />
                  <span className="text-sm text-gray-400">Add certificate image</span>
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <FaSearchPlus className="text-black" size={14} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-black mb-1">{cert.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            >
              <button
                id="close-certificate-modal"
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black transition-colors"
              >
                <HiX size={18} />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="w-full h-48 items-center justify-center flex-col gap-3"
                style={{ display: 'none' }}
              >
                <FaAward size={48} className="text-gray-300" />
                <p className="text-gray-400 text-sm">
                  Place your image at: <code className="text-black">{selected.image}</code>
                </p>
              </div>
              <div className="p-4 border-t border-gray-100">
                <h3 className="text-base font-bold text-black">{selected.title}</h3>
                <p className="text-sm text-gray-500">{selected.issuer} · {selected.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
