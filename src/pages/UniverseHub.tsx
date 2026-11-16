import { Link } from 'react-router'
import './UniverseHub.css'

// Pantallas del universo expandido. Agrega aquí las nuevas a medida que existan.
const entries = [
  {
    to: '/universo/sofia',
    kicker: 'Archivo 01',
    title: 'Perfil de Sofía',
    text: 'La cuenta de Facebook de Sofía, la pareja de Mateo.',
  },
  {
    to: '/universo/informe',
    kicker: 'Archivo 02',
    title: 'Caso NX-2026-10-4471',
    text: 'Informe policial de una muerte en el Edificio Altamira. Víctima no identificada.',
  },
  {
    to: '/universo/noticias',
    kicker: 'Archivo 03',
    title: 'Noticias Nexo',
    text: 'La cobertura de Vértice Labs, la empresa que creó a Atlas.',
  },
]

export default function UniverseHub() {
  return (
    <main className="hub">
      <Link to="/" className="hub__back">
        ← Volver al corto
      </Link>

      <header className="hub__header">
        <p className="hub__kicker">Not my life</p>
        <h1>Universo expandido</h1>
      </header>

      <ul className="hub__grid">
        {entries.map((e) => (
          <li key={e.to}>
            <Link to={e.to} className="hub__card">
              <span className="hub__card-kicker">{e.kicker}</span>
              <span className="hub__card-title">{e.title}</span>
              <span className="hub__card-text">{e.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
