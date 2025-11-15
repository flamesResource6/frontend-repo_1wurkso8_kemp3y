import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
      <div className="absolute -z-10 inset-0">
        <Spline scene="https://prod.spline.design/LVQ2bWwY6s3B-3d4/scene.splinecode" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Elevate Your Spirit. Master Your Kick.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Premium Taekwondo training for all ages and levels. Build confidence, discipline, and strength with world-class instructors.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#contact" className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700">Book a Free Class</a>
          <a href="#programs" className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-gray-50 border">View Programs</a>
        </motion.div>
      </div>
    </section>
  )
}
