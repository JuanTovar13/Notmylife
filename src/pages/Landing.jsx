import { Link } from 'react-router'
import InteractivePlayer from '../components/InteractivePlayer'
import '../App.css'

export default function Landing() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Not my life</h1>
      </header>

      <InteractivePlayer />

      <div className="app__universe">
        <Link to="/universo" className="btn-universe">
          <span className="btn-universe__label">Entrar al universo expandido</span>
          <span className="btn-universe__arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  )
}
