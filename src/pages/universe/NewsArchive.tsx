import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import {
  articles,
  mostRead,
  outlet,
  type Article as ArticleData,
  type ArticleImage as ArticleImageData,
} from '../../universe/news'
import './NewsArchive.css'

// Imagen del artículo: si el archivo aún no está en /public/images, placeholder.
function ArticleImage({ image }: { image: ArticleImageData }) {
  const [missing, setMissing] = useState(false)
  return (
    <figure className="nx-figure">
      {missing ? (
        <div className="nx-figure__ph">
          <span>Imagen pendiente · {image.file}</span>
        </div>
      ) : (
        <img
          src={`/images/${encodeURIComponent(image.file)}`}
          alt={image.caption}
          onError={() => setMissing(true)}
        />
      )}
      <figcaption>{image.caption}</figcaption>
    </figure>
  )
}

function Article({ article }: { article: ArticleData }) {
  return (
    <article className="nx-article">
      <p className={`nx-kicker${article.breaking ? ' is-breaking' : ''}`}>{article.kicker}</p>
      <h1 className="nx-article__title">{article.title}</h1>
      <p className="nx-article__lead">{article.lead}</p>
      <p className="nx-article__meta">
        {article.author} · {article.date}
      </p>

      <ArticleImage key={article.id} image={article.image} />

      <div className="nx-article__body">
        {article.body.map((block, i) =>
          typeof block === 'string' ? (
            <p key={i}>{block}</p>
          ) : (
            <blockquote key={i}>
              <p>"{block.quote}"</p>
              <cite>— {block.by}</cite>
            </blockquote>
          ),
        )}
      </div>

      <dl className="nx-facts">
        {article.facts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export default function NewsArchive() {
  const [params, setParams] = useSearchParams()
  const index = Math.max(
    0,
    articles.findIndex((a) => a.id === params.get('a')),
  )
  const current = articles[index]
  const next = articles[index + 1]

  const open = (id: string) => {
    setParams({ a: id })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="nx">
      <div className="nx-exit">
        <Link to="/universo">← Universo expandido</Link>
      </div>

      <header className="nx-mast">
        <p className="nx-mast__date">Ciudad Nexo · 16 de noviembre de 2026</p>
        <p className="nx-mast__name">{outlet.name}</p>
        <p className="nx-mast__tagline">{outlet.tagline}</p>
        <nav className="nx-nav" aria-label="Secciones">
          {['Ciudad', 'Política', 'Economía', outlet.section, 'Cultura', 'Deportes'].map((s) => (
            <span key={s} className={s === outlet.section ? 'is-active' : ''}>
              {s}
            </span>
          ))}
        </nav>
      </header>

      <section className="nx-coverage" aria-label="Cobertura especial">
        <p className="nx-coverage__label">Cobertura especial · Vértice Labs y Atlas</p>
        <ol className="nx-coverage__list">
          {articles.map((a) => (
            <li key={a.id}>
              <button
                type="button"
                className={a.id === current.id ? 'is-active' : ''}
                onClick={() => open(a.id)}
              >
                <span className="nx-coverage__date">{a.date}</span>
                <span className="nx-coverage__title">{a.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <div className="nx-layout">
        <main>
          <Article article={current} />
          {next && (
            <button type="button" className="nx-next" onClick={() => open(next.id)}>
              <span>Siguiente en esta cobertura</span>
              {next.title} →
            </button>
          )}
        </main>

        <aside className="nx-aside">
          <h2>Lo más leído</h2>
          <ol>
            {mostRead.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  )
}
