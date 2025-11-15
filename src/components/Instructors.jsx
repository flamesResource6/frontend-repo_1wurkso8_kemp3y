import { motion } from 'framer-motion'

const instructors = [
  { name: 'Master Kim', rank: '7th Dan', bio: '40+ years of experience, national team coach.', img: 'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Coach Lee', rank: '5th Dan', bio: 'Champion and mentor focusing on sparring.', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Coach Sara', rank: '3rd Dan', bio: 'Kids specialist making classes fun and engaging.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop' },
]

export default function Instructors() {
  return (
    <section id="instructors" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-center">Instructors</motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((i, idx) => (
            <motion.div key={i.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx * 0.1}} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
              <img src={i.img} alt={i.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{i.name} <span className="text-gray-500">• {i.rank}</span></h3>
                <p className="mt-2 text-gray-600">{i.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
