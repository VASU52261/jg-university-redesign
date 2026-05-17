'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const tabs = ['Undergraduate', 'Postgraduate', 'Doctoral', 'Certificate']

const programs = {
  Undergraduate: [
    { name: 'BBA', duration: '3 years', tag: 'Business', desc: 'Build strong business fundamentals with real-world exposure.' },
    { name: 'BBA (Hons)', duration: '4 years', tag: 'Business', desc: 'Advanced business with specialisation tracks.' },
    { name: 'B.Com', duration: '3 years', tag: 'Commerce', desc: 'Core commerce and accounting for modern finance.' },
    { name: 'B.Com with ACCA', duration: '4 years', tag: 'Commerce', desc: 'Global accounting certification with degree.' },
    { name: 'BCA', duration: '3 years', tag: 'Computing', desc: 'Computer applications with modern dev skills.' },
    { name: 'B.Tech - CSE', duration: '4 years', tag: 'Engineering', desc: 'Core computer science and software engineering.' },
    { name: 'B.Tech - AI & ML', duration: '4 years', tag: 'Engineering', desc: 'Artificial intelligence and machine learning.' },
    { name: 'B.Tech - Data Science', duration: '4 years', tag: 'Engineering', desc: 'Data analytics and big data engineering.' },
    { name: 'B.Sc - Cyber Forensic', duration: '3-5 years', tag: 'Science', desc: 'Digital crime investigation and cybersecurity.' },
    { name: 'B.Sc - Quantum Computing', duration: '3-5 years', tag: 'Science', desc: 'Next-gen quantum technology.' },
    { name: 'iMBA', duration: '5 years', tag: 'Business', desc: 'Integrated MBA combining UG and PG.' },
    { name: 'LL.B.', duration: '3 years', tag: 'Law', desc: 'Comprehensive legal education and practice.' },
  ],
  Postgraduate: [
    { name: 'MBA', duration: '2 years', tag: 'Business', desc: 'Industry-focused management for leaders.' },
    { name: 'M.Com (Hons)', duration: '2 years', tag: 'Commerce', desc: 'Advanced commerce with research orientation.' },
    { name: 'MCA', duration: '2 years', tag: 'Computing', desc: 'Master of computer applications.' },
    { name: 'MCA - AI & Full Stack', duration: '2 years', tag: 'Computing', desc: 'AI-powered full stack development.' },
    { name: 'M.Sc - Cyber Security', duration: '2 years', tag: 'Science', desc: 'Advanced cybersecurity and forensics.' },
    { name: 'M.Sc - Forensic Science', duration: '2 years', tag: 'Science', desc: 'Scientific crime investigation.' },
    { name: 'Masters - Intl Trade', duration: '2 years', tag: 'Business', desc: 'Global trade and international finance.' },
    { name: 'LL.M.', duration: '2 years', tag: 'Law', desc: 'Advanced legal studies.' },
  ],
  Doctoral: [
    { name: 'Ph.D in Commerce', duration: 'Research', tag: 'Commerce', desc: 'Advanced research in commerce.' },
    { name: 'Ph.D in Management', duration: 'Research', tag: 'Business', desc: 'Doctoral research in management.' },
    { name: 'Ph.D in Computing', duration: 'Research', tag: 'Computing', desc: 'Deep research in computer science.' },
    { name: 'Ph.D in Law', duration: 'Research', tag: 'Law', desc: 'Advanced legal research.' },
    { name: 'Ph.D Interdisciplinary', duration: 'Research', tag: 'Science', desc: 'Cross-domain research.' },
  ],
  Certificate: [
    { name: 'Data Science & AI-ML', duration: 'Short term', tag: 'Computing', desc: 'Hands-on AI and data science.' },
    { name: 'Cyber Security', duration: 'Short term', tag: 'Computing', desc: 'Protect systems from attacks.' },
    { name: 'Blockchain', duration: 'Short term', tag: 'Computing', desc: 'Decentralised tech and Web3.' },
    { name: 'Digital Marketing', duration: 'Short term', tag: 'Business', desc: 'SEO, social and growth marketing.' },
    { name: 'Full Stack Dev', duration: 'Short term', tag: 'Computing', desc: 'Build complete web applications.' },
    { name: 'Industrial IoT', duration: 'Short term', tag: 'Engineering', desc: 'Smart devices and manufacturing.' },
    { name: 'Mobile Apps', duration: 'Short term', tag: 'Computing', desc: 'iOS and Android development.' },
    { name: 'Azure DevOps', duration: 'Short term', tag: 'Computing', desc: 'Cloud deployment and CI/CD.' },
  ],
}

const tagColors = {
  Business: 'bg-[#B7794B]/10 text-[#B7794B]',
  Commerce: 'bg-emerald-100 text-emerald-700',
  Computing: 'bg-[#8B5CF6]/10 text-[#8B5CF6]',
  Engineering: 'bg-orange-100 text-orange-700',
  Science: 'bg-blue-100 text-blue-700',
  Law: 'bg-red-100 text-red-700',
}

export default function Programs() {
  const [active, setActive] = useState('Undergraduate')

  return (
    <section id="programs" className="py-32 bg-[#FFFDF9] w-full flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

        {/* Section Header — flex-col items-center forces the entire title block to stay in the middle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center justify-center w-full"
        >
          <span className="text-[#B7794B] text-sm font-semibold uppercase tracking-widest text-center">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mt-4 mb-6 tracking-tight text-center">Our Programmes</h2>
          <p className="text-[#6E6A63] max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-center">
            Industry-aligned programmes designed to launch your career or deepen your expertise.
          </p>
        </motion.div>

        {/* Tab Buttons row — centered cleanly */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 w-full max-w-2xl mx-auto">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tab
                  ? 'bg-[#B7794B] text-white shadow-lg shadow-[#B7794B]/20'
                  : 'bg-[#FAF7F2] text-[#6E6A63] hover:bg-[#E5D9C8] border border-[#E5D9C8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Container wrapper for program cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
          >
            {programs[active].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="bg-[#FAF7F2] border border-[#E5D9C8] rounded-2xl p-5 hover:shadow-md transition-all duration-300 group flex flex-col justify-between min-h-[150px] max-w-full"
              >
                <div>
                  <div className="flex items-start justify-between mb-3.5">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${tagColors[program.tag]}`}>
                      {program.tag}
                    </span>
                    <ArrowRight size={15} className="text-[#E5D9C8] group-hover:text-[#B7794B] group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <h4 className="text-[#2B2B2B] font-bold text-base mb-1 leading-snug">{program.name}</h4>
                  <p className="text-[#B7794B] text-xs font-semibold mb-2.5">{program.duration}</p>
                  <p className="text-[#6E6A63] text-xs leading-relaxed">{program.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}