'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Award, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2] pt-32 pb-20">

      {/* Background gradients */}
      <div className="absolute top-32 left-16 w-96 h-96 bg-[#B7794B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#B7794B]/10 border border-[#B7794B]/30 text-[#B7794B] px-5 py-2 rounded-full text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 bg-[#B7794B] rounded-full animate-pulse" />
          Admissions Open 2026-27
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#2B2B2B] leading-[1.15] mb-6 tracking-tight max-w-4xl"
        >
          Shape Your Future
          <span className="block bg-gradient-to-r from-[#B7794B] to-[#8B5CF6] bg-clip-text text-transparent mt-2">
            at JG University
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#6E6A63] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A new-age, tech-driven university offering industry-relevant programmes
          designed to prepare you for the real world. UGC approved. Future ready.
        </motion.p>

        {/* Action Buttons — mb-24 adds the clean gap before the icons below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mb-24"
        >
          <a href="#programs" className="w-full sm:w-auto bg-[#B7794B] hover:bg-[#9e6840] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 shadow-md flex items-center justify-center gap-2">
            Explore Programs <ArrowRight size={18} />
          </a>
          <a href="#about" className="w-full sm:w-auto bg-[#FFFDF9] hover:bg-white text-[#2B2B2B] px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 border border-[#E5D9C8] shadow-sm hover:shadow-md flex items-center justify-center">
            Learn More
          </a>
        </motion.div>

        {/* Metric Boxes — p-6 keeps content beautifully bound inside the boxes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
        >
          {[
            { icon: <Users size={20} className="text-[#B7794B]" />, value: '5000+', label: 'Students' },
            { icon: <BookOpen size={20} className="text-[#8B5CF6]" />, value: '50+', label: 'Programs' },
            { icon: <Award size={20} className="text-[#B7794B]" />, value: '58+', label: 'Years' },
            { icon: <TrendingUp size={20} className="text-[#8B5CF6]" />, value: '98%', label: 'Placement' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#FFFDF9] border border-[#E5D9C8] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2 bg-[#FAF7F2] p-2.5 rounded-xl">{stat.icon}</div>
              <p className="text-xl sm:text-2xl font-bold text-[#2B2B2B]">{stat.value}</p>
              <p className="text-xs text-[#6E6A63] font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}