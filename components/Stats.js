'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 58, suffix: '+', label: 'Years of Excellence', color: 'text-[#B7794B]' },
  { value: 17, suffix: '+', label: 'Colleges & Schools', color: 'text-[#8B5CF6]' },
  { value: 50, suffix: '+', label: 'Programmes Offered', color: 'text-[#B7794B]' },
  { value: 5000, suffix: '+', label: 'Alumni Worldwide', color: 'text-[#8B5CF6]' },
]

function Counter({ value, suffix, color }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(value / 60)
        const timer = setInterval(() => {
          start += step
          if (start >= value) { setCount(value); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={`text-4xl md:text-5xl font-bold ${color}`}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#FFFDF9] border-y border-[#E5D9C8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
              <p className="text-[#6E6A63] text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}