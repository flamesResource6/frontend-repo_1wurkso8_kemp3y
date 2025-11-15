import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Instructors from './components/Instructors'
import Schedule from './components/Schedule'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Instructors />
        <Schedule />
        <Pricing />
        <Contact />
      </main>
      <footer className="py-8 border-t text-center text-sm text-gray-600">© {new Date().getFullYear()} TKD Club. All rights reserved.</footer>
    </div>
  )
}

export default App
