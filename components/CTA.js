'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, GraduationCap, Building2, HeadphonesIcon } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden w-full mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#B7794B] via-[#9e6840] to-[#8B5CF6]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10 py-24 px-8 md:px-24 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Admissions Open 2026-27
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Your Future Starts
              <span className="block text-white/80 mt-2">Here and Now</span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Join thousands of students who have transformed their lives at JG University.
              Applications are now open — do not miss your chance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-md mx-auto">
              <a href="#programs" className="w-full sm:w-auto bg-white text-[#B7794B] hover:bg-[#FAF7F2] px-8 py-4 rounded-full font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-md">
                Apply Now <ArrowRight size={18} />
              </a>
              <a href="#about" className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-white/10">
                Learn More
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+917940045000" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm">
                <Phone size={16} /> +91 79 4004 5000
              </a>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
              <a href="mailto:admissions@jguni.in" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm">
                <Mail size={16} /> admissions@jguni.in
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <GraduationCap size={28} className="text-[#B7794B]" />,
              bg: 'bg-[#B7794B]/10',
              title: 'Merit Scholarships',
              desc: 'Financial support available for deserving students based on academic performance and merit.',
            },
            {
              icon: <Building2 size={28} className="text-[#8B5CF6]" />,
              bg: 'bg-[#8B5CF6]/10',
              title: 'Campus Visit',
              desc: 'Book a guided campus tour and experience JG University firsthand before making your decision.',
            },
            {
              icon: <HeadphonesIcon size={28} className="text-[#B7794B]" />,
              bg: 'bg-[#B7794B]/10',
              title: 'Talk to Counsellor',
              desc: 'Get personalised guidance from our expert admission counsellors — completely free of charge.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#FAF7F2] border border-[#E5D9C8] rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${card.bg} rounded-2xl flex items-center justify-center mb-6`}>
                {card.icon}
              </div>
              <h4 className="text-[#2B2B2B] font-bold text-lg mb-3">{card.title}</h4>
              <p className="text-[#6E6A63] text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}