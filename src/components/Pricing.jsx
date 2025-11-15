import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 59, features: ['1 class / week', 'Uniform discount', 'Belt tests available'] },
  { name: 'Standard', price: 89, features: ['2 classes / week', 'Free uniform', 'Belt tests included'] },
  { name: 'Unlimited', price: 119, features: ['Unlimited classes', 'Free gear pack', 'Tournament coaching'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-center">Pricing</motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: i * 0.1}} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-4xl font-extrabold"><span className="text-gray-900">${t.price}</span><span className="text-gray-500 text-base">/mo</span></p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700">Start Free Trial</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
