import { motion } from 'framer-motion';

export default function LearningSection() {
  const features = [
    {
      number: '01',
      title: 'Bite-sized',
      description:
        'Designed to fit naturally into your day with concise, focused content that delivers maximum clarity without cognitive fatigue.',
    },
    {
      number: '02',
      title: 'Gamified',
      description:
        'Interactive loops, progress milestones, and immediate feedback designed to build lasting momentum and habit formation.',
    },
    {
      number: '03',
      title: 'Practical',
      description:
        'Real-world projects, scenario-based problem solving, and actionable concepts ready for instant application.',
    },
  ];

  return (
    <section className="relative w-full bg-[#030604] text-white overflow-hidden py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 min-h-screen flex items-center">
      {/* Background Emerald Radial Glow (concentrated on the right side) */}
      <div 
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] md:w-[900px] lg:w-[1100px] h-[500px] sm:h-[700px] md:h-[900px] lg:h-[1100px] rounded-full opacity-70 blur-[130px] transition-opacity duration-1000"
        style={{
          background:
            'radial-gradient(circle at 75% 50%, rgba(16, 185, 129, 0.28) 0%, rgba(5, 150, 105, 0.12) 35%, rgba(4, 120, 87, 0.03) 65%, transparent 80%)',
        }}
      />
      
      {/* Secondary ambient glow for depth */}
      <div 
        className="pointer-events-none absolute right-[-10%] top-[30%] w-[600px] h-[600px] rounded-full opacity-40 blur-[160px]"
        style={{
          background:
            'radial-gradient(circle, rgba(52, 211, 153, 0.18) 0%, rgba(6, 78, 59, 0.05) 60%, transparent 80%)',
        }}
      />

      {/* Subtle Grain/Noise Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Large Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
              <span className="block">Learning is a</span>
              <span className="block">skill.</span>
              <span className="block text-white/90 font-semibold mt-2 sm:mt-3">
                Let's make it fun.
              </span>
            </h2>
          </motion.div>

          {/* Vertical Subtle Line Divider (Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full min-h-[360px]">
            <div className="w-[1px] h-full max-h-[420px] bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          </div>

          {/* Horizontal Line Divider (Mobile/Tablet fallback) */}
          <div className="lg:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-2" />

          {/* Right Side: 3 Numbered Sections */}
          <div className="lg:col-span-6 space-y-10 sm:space-y-12 lg:space-y-14">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group cursor-default"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 mb-2">
                  <span className="text-xs sm:text-sm md:text-base font-mono font-medium text-white/50 tracking-widest transition-colors duration-300 group-hover:text-white/80">
                    {feature.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
                    {feature.title}
                  </h3>
                </div>
                <p className="pl-8 sm:pl-11 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-xl transition-colors duration-300 group-hover:text-white/85">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
