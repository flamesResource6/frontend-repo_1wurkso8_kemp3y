import { motion } from 'framer-motion'
import { Shield, Users, Sparkles } from 'lucide-react'

const programs = [
  { title: 'Kids (5-12)', desc: 'Fun, discipline, and foundational skills in a safe environment.', icon: Users },
  { title: 'Teens & Adults', desc: 'Conditioning, technique, and sparring for all levels.', icon: Shield },
  { title: 'Black Belt Club', desc: 'Advanced training, leadership, and competition prep.', icon: Sparkles },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-center">Programs</motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay: i * 0.1}}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-red-50 text-red-600 grid place-items-center">
                <p.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
