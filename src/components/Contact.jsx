import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('✅ Thanks! We will reach out shortly.')
        e.currentTarget.reset()
      } else {
        setStatus(`❌ ${data.detail || 'Something went wrong'}`)
      }
    } catch (err) {
      setStatus(`❌ ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Contact Us</h2>
        <p className="mt-3 text-center text-gray-600">Book a free trial or ask a question — we’d love to hear from you.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="w-full rounded-md border px-3 py-2" />
              <input name="email" required type="email" placeholder="Email" className="w-full rounded-md border px-3 py-2" />
              <input name="phone" placeholder="Phone (optional)" className="w-full rounded-md border px-3 py-2 sm:col-span-2" />
              <input name="subject" placeholder="Subject" className="w-full rounded-md border px-3 py-2 sm:col-span-2" />
              <select name="how_heard" className="w-full rounded-md border px-3 py-2 sm:col-span-2">
                <option value="">How did you hear about us?</option>
                <option>Google</option>
                <option>Friend/Family</option>
                <option>Social Media</option>
                <option>Walk-in</option>
              </select>
              <textarea name="message" required rows="4" placeholder="Your message" className="w-full rounded-md border px-3 py-2 sm:col-span-2" />
            </div>
            <button className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700">Send Message</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </form>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Visit Our Dojang</h3>
            <p className="mt-2 text-gray-600">123 Martial Way, Your City</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509192!2d144.95373631590467!3d-37.8162797423088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzI2LjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2s!4v1611814933772!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-gray-600">Open Mon–Sat • Free parking available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
