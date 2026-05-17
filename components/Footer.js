'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#B7794B] flex items-center justify-center font-bold text-white text-sm">JG</div>
              <span className="text-white font-bold text-lg">JG University</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A new-age tech-driven university shaping the leaders of tomorrow through industry-relevant education since 1965.
            </p>
            <div className="flex gap-3">
              {['In', 'Tw', 'Li', 'Yt'].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#B7794B] hover:text-white hover:border-[#B7794B] transition-all duration-200 text-xs font-bold">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Programs', 'Admissions', 'Faculty', 'Campus', 'Contact'].map((link, i) => (
                <li key={i}><a href="#" className="text-white/50 hover:text-[#B7794B] text-sm transition-colors duration-200">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Programs</h4>
            <ul className="flex flex-col gap-3">
              {['BBA', 'B.Com', 'BCA', 'B.Tech', 'MBA', 'MCA', 'Ph.D'].map((link, i) => (
                <li key={i}><a href="#programs" className="text-white/50 hover:text-[#B7794B] text-sm transition-colors duration-200">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#B7794B] shrink-0 mt-0.5" />
                <p className="text-white/50 text-sm leading-relaxed">JG University, SG Highway, Ahmedabad, Gujarat 382470, India</p>
              </div>
              <a href="tel:+917940045000" className="flex items-center gap-3 text-white/50 hover:text-[#B7794B] text-sm transition-colors duration-200">
                <Phone size={16} className="text-[#B7794B] shrink-0" /> +91 79 4004 5000
              </a>
              <a href="mailto:admissions@jguni.in" className="flex items-center gap-3 text-white/50 hover:text-[#B7794B] text-sm transition-colors duration-200">
                <Mail size={16} className="text-[#B7794B] shrink-0" /> admissions@jguni.in
              </a>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 JG University. All rights reserved.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item, i) => (
              <a key={i} href="#" className="text-white/30 hover:text-[#B7794B] text-sm transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}