import { motion } from 'framer-motion'

const schedule = [
  { day: 'Mon', times: 'Kids 4pm • Teens 5pm • Adults 7pm' },
  { day: 'Wed', times: 'Kids 4pm • Teens 5pm • Adults 7pm' },
  { day: 'Fri', times: 'Sparring 6pm • Adults 7pm' },
  { day: 'Sat', times: 'Family Class 10am • Beginners 11am' },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-center">Schedule</motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {schedule.map((s, i) => (
            <motion.div key={s.day} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: i * 0.1}} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{s.day}</p>
                <p className="text-gray-600">{s.times}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
