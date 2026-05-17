'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  { name: 'Jigardan Gadhvi', role: 'Celebrity Singer', initial: 'J', color: 'bg-[#B7794B]', stars: 5, text: 'As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers — they served as mentors who supported and guided us at every step.' },
  { name: 'Parth Rupareliya', role: 'Art Director', initial: 'P', color: 'bg-[#8B5CF6]', stars: 5, text: 'My time at JG was one of my most fulfilling and life-changing experiences. The faculty are highly experienced and dedicated. JG helped me build a strong foundation for my career.' },
  { name: 'Yatendra Sinh Joddha', role: 'Technical Lead, TCS', initial: 'Y', color: 'bg-[#B7794B]', stars: 5, text: 'My education at JG played a pivotal role in shaping my career at TCS. The BCA program gave me a strong IT foundation and the focus on practical learning gave me real-world experience.' },
  { name: 'Krishna Soni', role: 'Assistant Manager, ICICI Bank', initial: 'K', color: 'bg-[#8B5CF6]', stars: 5, text: 'The Management programme offers cutting-edge design and hands-on projects. I was encouraged to uncover skills I never knew I had. JG places strong emphasis on personality development.' },
  { name: 'Aayushi Gor', role: 'HR Trainer, Godrej and Boyce', initial: 'A', color: 'bg-[#B7794B]', stars: 5, text: 'JG provided me numerous opportunities to discover my potential. The university gives incredible knowledge and discipline that helps you achieve in all activities.' },
  { name: 'Stavan Doshi', role: 'Business Owner', initial: 'S', color: 'bg-[#8B5CF6]', stars: 5, text: 'I owe my success as a business owner to JG. The strong emphasis on entrepreneurship inspired me. The mentorship programs were invaluable in turning my vision into reality.' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="py-32 bg-[#FAF7F2] w-full flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

        {/* Section Title Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center"
        >
          <span className="text-[#B7794B] text-sm font-semibold uppercase tracking-widest">Alumni Speak</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mt-3 mb-4 tracking-tight">Success Stories</h2>
          <p className="text-[#6E6A63] max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-center">
            Hear from our alumni making a mark across industries worldwide.
          </p>
        </motion.div>

        {/* Outer alignment container — This forces the entire layout slider block to stay centered on your screen */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
          
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-[#FFFDF9] border border-[#E5D9C8] rounded-3xl p-8 md:p-12 shadow-sm flex flex-col items-center text-center justify-center mx-auto"
              >
                {/* Star Rating Box centered */}
                <div className="flex gap-1 justify-center mb-6 w-full items-center">
                  {[...Array(testimonials[current].stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#B7794B] fill-[#B7794B]" />
                  ))}
                </div>

                {/* Quote text block centered */}
                <p className="text-[#2B2B2B] text-base md:text-lg font-medium leading-relaxed mb-8 max-w-2xl mx-auto text-center">
                  "{testimonials[current].text}"
                </p>

                {/* Identity Footer Container stacked straight down the middle */}
                <div className="flex flex-col items-center justify-center text-center gap-3 w-full">
                  <div className={`w-12 h-12 rounded-full ${testimonials[current].color} flex items-center justify-center text-white font-bold text-lg shadow-sm mx-auto`}>
                    {testimonials[current].initial}
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-[#2B2B2B] font-bold text-base leading-tight text-center">{testimonials[current].name}</p>
                    <p className="text-[#6E6A63] text-xs font-semibold mt-1.5 text-center">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls underneath slider board */}
          <div className="flex items-center justify-center gap-5 mt-8 w-full mx-auto">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#E5D9C8] flex items-center justify-center text-[#6E6A63] hover:bg-[#B7794B] hover:text-white hover:border-[#B7794B] transition-all duration-200 shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2 items-center justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${i === current ? 'w-6 h-2 bg-[#B7794B]' : 'w-2 h-2 bg-[#E5D9C8] hover:bg-[#B7794B]/40'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#E5D9C8] flex items-center justify-center text-[#6E6A63] hover:bg-[#B7794B] hover:text-white hover:border-[#B7794B] transition-all duration-200 shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}