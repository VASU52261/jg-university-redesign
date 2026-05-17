'use client'
import { motion } from 'framer-motion'
import { CheckCircle, GraduationCap, Globe, Cpu, FlaskConical } from 'lucide-react'

const highlights = [
  'UGC Approved & NEP 2020 Compliant',
  'Industry-relevant curriculum updated every year',
  'Collaboration with foreign universities',
  'Full pay on-the-job training opportunities',
  'Cross-cultural and cross-sectoral internships',
  'Course-embedded capstone projects',
]

const cards = [
  { icon: <GraduationCap size={20} className="text-[#B7794B]" />, title: 'Est. 1965', desc: 'Over 58 years of trusted education' },
  { icon: <Globe size={20} className="text-[#8B5CF6]" />, title: 'Global Reach', desc: 'Foreign university tie-ups worldwide' },
  { icon: <Cpu size={20} className="text-[#B7794B]" />, title: 'Tech-Driven', desc: 'Future-proof curriculum' },
  { icon: <FlaskConical size={20} className="text-[#8B5CF6]" />, title: 'R&D + IIoT', desc: 'Research and innovation hubs' },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Section Header — mb-24 separates the paragraph text cleanly from lists below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-3xl w-full flex flex-col items-center"
        >
          <span className="text-[#B7794B] text-sm font-semibold uppercase tracking-widest">Who We Are</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mt-3 mb-6 tracking-tight leading-tight">
            Education Beyond
            <span className="block bg-gradient-to-r from-[#B7794B] to-[#8B5CF6] bg-clip-text text-transparent mt-1">
              The Pages of Books
            </span>
          </h2>
          {/* Centered Descriptive Paragraph Block */}
          <p className="text-[#6E6A63] text-base sm:text-lg text-center leading-relaxed max-w-2xl mt-4 mx-auto">
            Sponsored by the ASIA Charitable Trust — in education since 1965 — JG University
            empowers students to explore, grow, and lead.
          </p>
        </motion.div>

        {/* Main Content Splitting Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-start w-full mb-20">

          {/* Highlights List Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3.5 w-full"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-[#FFFDF9] rounded-xl border border-[#E5D9C8]"
              >
                <CheckCircle size={18} className="text-[#B7794B] shrink-0" />
                <span className="text-[#2B2B2B] text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Purple Card Box Column — Compact fonts & text stays inside boundaries */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#B7794B] to-[#8B5CF6] p-8 md:p-10 text-white shadow-xl">
              <div className="relative z-10">
                <div className="text-3xl font-bold mb-1">58+</div>
                <div className="text-white/80 text-xs font-semibold mb-6">Years of Excellence</div>
                
                {/* Internal boxes formatted to stay inside padding frames */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { val: '17+', label: 'Colleges' },
                    { val: '50+', label: 'Programmes' },
                    { val: '5000+', label: 'Alumni' },
                    { val: '98%', label: 'Placement' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                      <div className="text-lg font-bold text-white leading-none">{s.val}</div>
                      <div className="text-white/70 text-[11px] mt-1.5 font-medium leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/5">
                  <span className="text-sm">✓</span>
                  <div>
                    <div className="font-semibold text-sm">UGC Approved University</div>
                    <div className="text-white/70 text-xs">Nationally recognised degrees</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Quad Layout Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#FFFDF9] border border-[#E5D9C8] rounded-2xl p-6">
              <div className="mb-4 bg-[#FAF7F2] w-10 h-10 rounded-xl flex items-center justify-center">{card.icon}</div>
              <h4 className="text-[#2B2B2B] font-bold text-sm mb-1">{card.title}</h4>
              <p className="text-[#6E6A63] text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}