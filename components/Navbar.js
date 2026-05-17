'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E5D9C8]'
        : 'bg-[#FAF7F2]/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#B7794B] flex items-center justify-center font-bold text-white text-sm">JG</div>
          <span className="font-bold text-xl text-[#2B2B2B]">JG University</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Programs', 'Strengths', 'Testimonials', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#6E6A63] hover:text-[#B7794B] transition-colors duration-200 text-sm font-medium">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="#contact" className="bg-[#B7794B] hover:bg-[#9e6840] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200">
            Apply Now
          </a>
        </div>
        <button className="md:hidden text-[#2B2B2B]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E5D9C8] px-6 py-6 flex flex-col gap-5 shadow-xl">
          {['About', 'Programs', 'Strengths', 'Testimonials', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="text-[#6E6A63] hover:text-[#B7794B] text-sm font-medium">
              {link}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-[#B7794B] text-white px-6 py-3 rounded-full text-sm font-semibold text-center mt-2">Apply Now</a>
        </div>
      )}
    </nav>
  )
}