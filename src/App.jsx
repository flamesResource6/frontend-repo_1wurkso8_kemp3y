import { useState } from 'react'
import { Calendar, Utensils, User2, Bell, School } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <School className="w-7 h-7 text-blue-600" />
          <div>
            <h1 className="text-lg font-bold">Lycée Charles de Gaulle</h1>
            <p className="text-xs text-gray-500">Application élève & parent</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#menu" className="hover:text-blue-600">Menu cantine</a>
          <a href="#edt" className="hover:text-blue-600">Emploi du temps</a>
          <a href="#absences" className="hover:text-blue-600">Absences</a>
        </nav>
      </div>
    </header>
  )
}

function Card({ icon, title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function MenuCantine() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchToday = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_BASE}/api/menu/today`)
      const json = await res.json()
      setData(json)
    } catch (e) {
      console.error(e)
      setData({ error: 'Impossible de récupérer le menu.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card icon={<Utensils className="w-5 h-5 text-blue-600" />} title="Menu de la cantine (aujourd'hui)">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={fetchToday} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Actualiser</button>
        <span className="text-sm text-gray-500">Source: administration</span>
      </div>
      {!data && <p className="text-gray-500 text-sm">Cliquez sur Actualiser pour voir le menu d'aujourd'hui.</p>}
      {loading && <p className="text-sm">Chargement...</p>}
      {data && !loading && (
        data?.error ? (
          <p className="text-red-600 text-sm">{data.error}</p>
        ) : data === null ? (
          <p className="text-sm text-gray-600">Pas de menu publié pour aujourd'hui.</p>
        ) : (
          <ul className="space-y-2">
            {data?.items?.map((it, idx) => (
              <li key={idx} className="flex items-center justify-between border rounded p-2">
                <span className="font-medium">{it.dish}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{it.type}</span>
              </li>
            ))}
          </ul>
        )
      )}
    </Card>
  )
}

function EmploiDuTemps() {
  const [loading, setLoading] = useState(false)
  const [entries, setEntries] = useState([])
  const [creds, setCreds] = useState({ url: '', username: '', password: '' })

  const fetchEdt = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/pronote/timetable`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...creds })
      })
      const json = await res.json()
      setEntries(Array.isArray(json) ? json : [])
    } catch (e) {
      console.error(e)
      setEntries([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card icon={<Calendar className="w-5 h-5 text-blue-600" />} title="Emploi du temps (Pronote)">
      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <input className="border rounded px-3 py-2 text-sm" placeholder="URL Pronote" value={creds.url} onChange={e => setCreds({ ...creds, url: e.target.value })} />
        <input className="border rounded px-3 py-2 text-sm" placeholder="Identifiant" value={creds.username} onChange={e => setCreds({ ...creds, username: e.target.value })} />
        <input className="border rounded px-3 py-2 text-sm" placeholder="Mot de passe" type="password" value={creds.password} onChange={e => setCreds({ ...creds, password: e.target.value })} />
      </div>
      <button onClick={fetchEdt} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Voir l'EDT</button>
      {loading && <p className="text-sm mt-3">Chargement...</p>}
      {!loading && entries?.length > 0 && (
        <ul className="mt-4 divide-y">
          {entries.map((e, i) => (
            <li key={i} className="py-2 flex items-center justify-between text-sm">
              <div>
                <p className="font-medium">{e.subject} • {e.room}</p>
                <p className="text-gray-500">{e.date} · {e.start} - {e.end} · {e.teacher}</p>
              </div>
              <span className="text-xs bg-gray-100 rounded px-2 py-1">{e.group}</span>
            </li>
          ))}
        </ul>
      )}
      {!loading && entries?.length === 0 && (
        <p className="text-sm text-gray-500 mt-3">Renseignez vos identifiants Pronote pour une simulation d'EDT.</p>
      )}
    </Card>
  )
}

function Absences() {
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState([])
  const [creds, setCreds] = useState({ url: '', username: '', password: '' })

  const fetchAbs = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/pronote/absences`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...creds })
      })
      const json = await res.json()
      setRecords(Array.isArray(json) ? json : [])
    } catch (e) {
      console.error(e)
      setRecords([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card icon={<Bell className="w-5 h-5 text-blue-600" />} title="Absences (Pronote)">
      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <input className="border rounded px-3 py-2 text-sm" placeholder="URL Pronote" value={creds.url} onChange={e => setCreds({ ...creds, url: e.target.value })} />
        <input className="border rounded px-3 py-2 text-sm" placeholder="Identifiant" value={creds.username} onChange={e => setCreds({ ...creds, username: e.target.value })} />
        <input className="border rounded px-3 py-2 text-sm" placeholder="Mot de passe" type="password" value={creds.password} onChange={e => setCreds({ ...creds, password: e.target.value })} />
      </div>
      <button onClick={fetchAbs} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Voir les absences</button>
      {loading && <p className="text-sm mt-3">Chargement...</p>}
      {!loading && records?.length > 0 && (
        <ul className="mt-4 divide-y">
          {records.map((r, i) => (
            <li key={i} className="py-2 text-sm flex items-center justify-between">
              <div>
                <p className="font-medium">{r.date} • {r.start} - {r.end}</p>
                <p className="text-gray-500">{r.justified ? 'Justifiée' : 'Non justifiée'} {r.reason ? `• ${r.reason}` : ''}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!loading && records?.length === 0 && (
        <p className="text-sm text-gray-500 mt-3">Renseignez vos identifiants Pronote pour une simulation d'absences.</p>
      )}
    </Card>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <section id="intro" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Bienvenue</h2>
          <p className="text-gray-600 text-sm">Consultez le menu de la cantine, l'emploi du temps et les absences — le tout au même endroit.</p>
        </section>

        <section id="menu">
          <MenuCantine />
        </section>

        <section id="edt">
          <EmploiDuTemps />
        </section>

        <section id="absences">
          <Absences />
        </section>
      </main>

      <footer className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Lycée Charles de Gaulle</footer>
    </div>
  )
}

export default App
